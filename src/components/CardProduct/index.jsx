import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../hooks/CartContext';
import { Container, CardImage } from './styles';
import { CartButton } from '../CartButton';
import PropTypes from 'prop-types';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
