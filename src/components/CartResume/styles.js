import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 15px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    border-radius: 10px;
  }

  input {
    width: 80%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    font-size: 16px;
    font-weight: 500;
    color: #484848;
    outline: none;
    transition: border 0.2s ease;
    display: block;
    grid-column: 1 / span 2;
    justify-self: center;

    &:focus {
      border-color: #484848;
    }

    @media (max-width: 768px) {
      width: 90%;
      font-size: 14px;
      padding: 8px;
    }

    @media (max-width: 480px) {
      width: 95%;
      font-size: 12px;
      padding: 6px;
    }
  }

  * {
    color: #484848;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 5px 30%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      text-align: center;
      background-color: #484848;
      color: #fff;
      padding: 14px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;

      @media (max-width: 768px) {
        font-size: 18px;
        padding: 12px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        padding: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
    }

    .items {
      grid-area: items;
      padding-left: 20px;

      @media (max-width: 768px) {
        padding-left: 15px;
        font-size: 14px;
      }

      @media (max-width: 480px) {
        padding-left: 10px;
        font-size: 12px;
      }
    }

    .items-price {
      grid-area: items-price;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 480px) {
        font-size: 12px;
      }
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;

      @media (max-width: 768px) {
        padding-left: 15px;
        font-size: 14px;
      }

      @media (max-width: 480px) {
        padding-left: 10px;
        font-size: 12px;
      }
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 480px) {
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      grid-gap: 3px 20%;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 22px;
    padding: 15px;

    * {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      padding: 12px;
      margin-top: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      padding: 10px;
      margin-top: 15px;
      flex-direction: column;
      gap: 5px;
      text-align: center;
    }
  }

  select {
    width: 80%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    font-size: 16px;
    font-weight: 500;
    color: #484848;
    outline: none;
    transition: border 0.2s ease;
    grid-column: 1 / span 2;
    justify-self: center;

    &:focus {
      border-color: #484848;
    }
  }
`; //FIM

export const Select = styled.select`
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  font-size: 16px;
  font-weight: 500;
  color: #484848;
  outline: none;
  transition: border 0.2s ease;
  display: block;

  &:focus {
    border-color: #484848;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 12px;
    padding: 6px;
  }
`;

export const LabelSelect = styled.label`
  margin-top: 10px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #484848;
  display: block;

  @media (max-width: 768px) {
    padding-left: 15px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    font-size: 12px;
    text-align: center;
  }
`;
