import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from '../../../hooks/CartContext';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../../../services/api';
import './styles.css';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const { address, deliveryTax, total, user, paymentMethod } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('=== INÍCIO DO PROCESSO DE PAGAMENTO ===');
    console.log('Stripe disponível:', !!stripe);
    console.log('Elements disponível:', !!elements);
    console.log('Dados:', {
      address,
      deliveryTax,
      total,
      user: !!user,
      products: cartProducts.length,
    });

    if (!stripe || !elements) {
      console.log('ERRO: Stripe/Elements não disponíveis');
      toast.error('Sistema de pagamento não carregou');
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      console.log('Confirmando pagamento...');

      const result = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      console.log('Resultado do pagamento:', result);

      if (result.error) {
        console.log('ERRO no pagamento:', result.error);
        setMessage(result.error.message);
        toast.error(result.error.message);
      } else if (
        result.paymentIntent &&
        result.paymentIntent.status === 'succeeded'
      ) {
        console.log('✅ PAGAMENTO CONFIRMADO!');
        console.log('PaymentIntent ID:', result.paymentIntent.id);

        // Criar pedido
        console.log('Criando pedido...');

        const orderData = {
          user,
          products: cartProducts.map((p) => ({
            id: p.id,
            name: p.name,
            quantity: p.quantity,
            price: p.price,
            category: p.category,
            url: p.url,
          })),
          address,
          deliveryTax,
          total,
          status: 'Pedido realizado.',
          paymentIntentId: result.paymentIntent.id,
          paymentMethod: paymentMethod || 'cartao_online',
        };

        console.log('Dados do pedido:', orderData);

        try {
          const response = await api.post('/orders', orderData);
          console.log('✅ PEDIDO CRIADO:', response.status, response.data);

          toast.success('Pedido realizado com sucesso!');

          setTimeout(() => {
            clearCart(); // Limpar carrinho só antes de navegar
            navigate(
              `/complete?payment_intent_client_secret=${result.paymentIntent.client_secret}`
            );
          }, 2000);
        } catch (orderError) {
          console.log(
            '❌ ERRO ao criar pedido:',
            orderError.response?.data || orderError.message
          );
          toast.error('Erro ao salvar pedido');
        }
      } else {
        console.log('Status do pagamento:', result.paymentIntent?.status);
        setMessage(`Status: ${result.paymentIntent?.status}`);
      }
    } catch (error) {
      console.log('❌ ERRO GERAL:', error);
      toast.error('Erro no processamento');
      setMessage('Erro no processamento');
    }

    setIsLoading(false);
  };

  // Verificar dados
  if (!address || !user || !cartProducts.length) {
    return (
      <div className="checkout-container">
        <div className="checkout-content" style={{ gridTemplateColumns: '1fr', justifyItems: 'center' }}>
          <div className="order-summary" style={{ textAlign: 'center', maxWidth: '500px' }}>
            <h2>⚠️ Dados Incompletos</h2>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ margin: '10px 0', fontSize: '16px' }}>
                <strong>Endereço:</strong> {address ? '✅ Preenchido' : '❌ Faltando'}
              </p>
              <p style={{ margin: '10px 0', fontSize: '16px' }}>
                <strong>Usuário:</strong> {user ? '✅ Logado' : '❌ Não logado'}
              </p>
              <p style={{ margin: '10px 0', fontSize: '16px' }}>
                <strong>Produtos:</strong> {cartProducts.length > 0 ? `✅ ${cartProducts.length} itens` : '❌ Carrinho vazio'}
              </p>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="pay-button"
              style={{ background: 'linear-gradient(135deg, #dc3545, #c82333)' }}
            >
              ← Voltar e Corrigir
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        {/* Resumo do Pedido */}
        <div className="order-summary">
          <h2>🛒 Resumo do Pedido</h2>
          
          {/* Produtos */}
          <div className="products-section">
            <h3>Produtos ({cartProducts.length} itens)</h3>
            <div className="products-list">
              {cartProducts.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.url} alt={product.name} className="product-image" />
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>Quantidade: {product.quantity}</p>
                    <p className="product-price">R$ {((product.price * product.quantity) / 100).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detalhes da Entrega */}
          <div className="delivery-section">
            <h3>📍 Entrega</h3>
            <p><strong>Endereço:</strong> {address}</p>
            <p><strong>Taxa de entrega:</strong> R$ {(deliveryTax / 100).toFixed(2)}</p>
          </div>

          {/* Total */}
          <div className="total-section">
            <div className="total-breakdown">
              <div className="total-line">
                <span>Subtotal:</span>
                <span>R$ {((total - deliveryTax) / 100).toFixed(2)}</span>
              </div>
              <div className="total-line">
                <span>Taxa de entrega:</span>
                <span>R$ {(deliveryTax / 100).toFixed(2)}</span>
              </div>
              <div className="total-line total-final">
                <span><strong>Total:</strong></span>
                <span><strong>R$ {(total / 100).toFixed(2)}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Pagamento */}
        <div className="payment-section">
          <h2>💳 Pagamento</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="payment-element-container">
              <PaymentElement />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !stripe || !elements}
              className={`pay-button ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Processando...
                </>
              ) : (
                `💰 Pagar R$ ${(total / 100).toFixed(2)}`
              )}
            </button>
          </form>

          {message && (
            <div className="error-message">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
}
