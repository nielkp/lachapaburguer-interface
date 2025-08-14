import React, { useEffect, useState } from 'react';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import {
  Container,
  Header,
  OrdersContainer,
  OrderCard,
  OrderHeader,
  OrderInfo,
  OrderStatus,
  ProductsList,
  ProductItem,
  ProductImage,
  ProductDetails,
  FinancialSummary,
  SummaryItem,
  DeliveryInfo,
  NoOrders,
  LoadingMessage,
} from './styles';

export function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrders, setExpandedOrders] = useState({});
  const { userInfo } = useUser();

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('/user-orders');
        setOrders(data);
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      } finally {
        setLoading(false);
      }
    }

    if (userInfo?.id) {
      loadOrders();
    } else {
      setLoading(false);
    }
  }, [userInfo]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pedido realizado':
      case 'Pedido realizado.':
        return '#f39c12'; // Laranja - Pedido confirmado
      case 'Em Preparação':
        return '#3498db'; // Azul - Em preparação
      case 'Pedido Pronto':
        return '#27ae60'; // Verde - Pronto para retirada/entrega
      case 'Pedido à Caminho':
        return '#9b59b6'; // Roxo - A caminho do cliente
      case 'Entregue':
        return '#2ecc71'; // Verde claro - Entregue com sucesso
      case 'Cancelado':
        return '#e74c3c'; // Vermelho - Pedido cancelado
      default:
        return '#95a5a6'; // Cinza - Status desconhecido
    }
  };

  const toggleOrderExpansion = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  if (!userInfo?.id) {
    return (
      <Container>
        <Header>
          <h1>Meus Pedidos</h1>
        </Header>
        <NoOrders>
          <p>Você precisa estar logado para ver seus pedidos.</p>
        </NoOrders>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Header>
          <h1>Meus Pedidos</h1>
        </Header>
        <LoadingMessage>
          <p>Carregando seus pedidos...</p>
        </LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h1>Meus Pedidos</h1>
        <p>Acompanhe o status dos seus pedidos</p>
      </Header>

      <OrdersContainer>
        {orders.length === 0 ? (
          <NoOrders>
            <p>Você ainda não fez nenhum pedido.</p>
          </NoOrders>
        ) : (
          orders.map((order) => {
            const isExpanded = expandedOrders[order._id];
            return (
              <OrderCard key={order._id}>
                <OrderHeader
                  onClick={() => toggleOrderExpansion(order._id)}
                  style={{ cursor: 'pointer' }}
                >
                  <OrderInfo>
                    <h3>Pedido #{order._id.slice(-8)}</h3>
                    <p>{formatDate(order.createdAt)}</p>
                    <p
                      style={{
                        margin: '4px 0',
                        fontSize: '0.9rem',
                        color: '#666',
                      }}
                    >
                      Total: {formatPrice(order.total)} •{' '}
                      {order.products.length}{' '}
                      {order.products.length === 1 ? 'item' : 'itens'}
                    </p>
                  </OrderInfo>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <OrderStatus color={getStatusColor(order.status)}>
                      {order.status}
                    </OrderStatus>
                    <span style={{ fontSize: '1.2rem', color: '#666' }}>
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </div>
                </OrderHeader>

                {isExpanded && (
                  <>
                    <ProductsList>
                      {order.products.map((product, index) => (
                        <ProductItem key={index}>
                          <ProductImage src={product.url} alt={product.name} />
                          <ProductDetails>
                            <h4>{product.name}</h4>
                            <p>Quantidade: {product.quantity}</p>
                            <p>Preço: {formatPrice(product.price)}</p>
                          </ProductDetails>
                        </ProductItem>
                      ))}
                    </ProductsList>

                    <FinancialSummary>
                      <h4>📊 Resumo Financeiro</h4>
                      <SummaryItem>
                        <span>🛒 Subtotal dos Produtos:</span>
                        <strong>
                          {formatPrice(order.total - (order.deliveryTax || 0))}
                        </strong>
                      </SummaryItem>
                      <SummaryItem>
                        <span>🚚 Taxa de Entrega:</span>
                        <strong>{formatPrice(order.deliveryTax || 0)}</strong>
                      </SummaryItem>
                      <SummaryItem className="total">
                        <span>💰 Total do Pedido:</span>
                        <strong>{formatPrice(order.total)}</strong>
                      </SummaryItem>
                    </FinancialSummary>

                    <DeliveryInfo>
                      <h4>📍 Informações de Entrega</h4>
                      <p>
                        <strong>Endereço:</strong>{' '}
                        {order.address || 'Endereço não informado'}
                      </p>
                    </DeliveryInfo>
                  </>
                )}
              </OrderCard>
            );
          })
        )}
      </OrdersContainer>
    </Container>
  );
}
