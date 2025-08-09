import { formatPrice } from '../../utils/formatPrice';
import { CartButton } from '../CartButton';
import { Container, CardImage } from './styles';
import PropTypes from 'prop-types';

export function CardProduct({ product }) {
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <CartButton></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
