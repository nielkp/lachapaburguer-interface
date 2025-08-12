import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { Button } from '../Button';
import { Container, Select, LabelSelect } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);

  const deliveryOptions = [
    { label: 'Meaipe - GRATIS', value: 0 },
    { label: 'Condados - R$2,00', value: 200 },
    { label: 'Nova Guarapari - R$3,00', value: 300 },
    { label: 'Porto Grande - R$4,00', value: 400 },
  ];

  const [deliveryTax, setDeliveryTax] = useState(deliveryOptions[0].value);

  const [address, setAddress] = useState('');

  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();
  const { userInfo } = useUser();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const handleChangeTax = (event) => {
    setDeliveryTax(Number(event.target.value));
  };

  const totalAmount = finalPrice + deliveryTax;

  const submitOrder = async () => {
    if (!address.trim()) {
      toast.warn('Por favor, preencha o endereço!');
      return;
    }

    const products = cartProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      price: product.price,
    }));

    try {
      const { data } = await api.post('/create-payment-intent', {
        products,
        deliveryTax,
        address,
        total: totalAmount,
      });

      navigate('/checkout', {
        state: {
          ...data,
          products,
          address,
          deliveryTax,
          total: totalAmount,
          user: {
            id: userInfo.id,
            name: userInfo.name,
          },
        },
      });
    } catch (err) {
      toast.error('Algo deu errado, tente novamente!');
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>

          <LabelSelect htmlFor="delivery">Tipo de Entrega</LabelSelect>
          <Select id="delivery" onChange={handleChangeTax} value={deliveryTax}>
            {deliveryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>

          <LabelSelect htmlFor="address">Endereço de Entrega</LabelSelect>
          <Select
            as="input"
            id="address"
            type="text"
            placeholder="Digite seu endereço completo"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p className="total">Total</p>
          <p className="total-price">{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>

      <Button onClick={submitOrder} style={{ marginLeft: '20px' }}>
        Finalizar Pedido
      </Button>
    </div>
  );
}
