import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    border-radius: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    border-radius: 8px;
  }
`; //FIM

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius: 5px;
    background-color: #fd8f00;
    transition: all 0.4s;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #fd7200;
    }

    @media (max-width: 768px) {
      height: 28px;
      width: 28px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      height: 25px;
      width: 25px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`; //FIM

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`; //FIM

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`; //FIM

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 18px;
    width: 18px;
  }

  @media (max-width: 480px) {
    height: 16px;
    width: 16px;
  }
`; //FIM
