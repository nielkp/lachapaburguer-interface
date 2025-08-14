import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  
  h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  border: 2px solid ${props => props.$isSelected ? props.$color : '#e0e0e0'};
  border-radius: 12px;
  background: ${props => props.$isSelected ? `${props.$color}10` : '#fff'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.$color};
    background: ${props => `${props.$color}08`};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PaymentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => `${props.$color}15`};
  color: ${props => props.$color};
  margin-right: 15px;
  flex-shrink: 0;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  strong {
    color: #333;
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  span {
    color: #666;
    font-size: 14px;
  }
`;

export const ChangeInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #28a745;
  }
  
  &::placeholder {
    color: #999;
  }
`;