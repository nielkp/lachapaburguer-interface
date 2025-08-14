import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundlogin.avif';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${backgroundImage});
  padding: 20px;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: #ff8c00;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 8px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 600;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  }
`;

export const OrdersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
`;

export const OrderInfo = styled.div`
  h3 {
    color: #333;
    margin-bottom: 4px;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

export const OrderStatus = styled.span`
  background: ${(props) => props.color};
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductDetails = styled.div`
  flex: 1;

  h4 {
    color: #333;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 2px 0;
  }
`;

export const NoOrders = styled.div`
  text-align: center;
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const FinancialSummary = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;

  h4 {
    color: #333;
    margin-bottom: 16px;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  &.total {
    margin-top: 8px;
    padding-top: 12px;
    border-top: 2px solid #ddd;
    font-size: 1.1rem;

    span, strong {
      color: #28a745;
      font-weight: 700;
    }
  }

  span {
    color: #666;
    font-size: 0.95rem;
  }

  strong {
    color: #333;
    font-weight: 600;
  }
`;

export const DeliveryInfo = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: #e8f4fd;
  border-radius: 8px;
  border-left: 4px solid #007bff;

  h4 {
    color: #333;
    margin-bottom: 8px;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: #555;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;

    strong {
      color: #333;
    }
  }
`;