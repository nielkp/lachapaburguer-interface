import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

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
    }

    .items {
      grid-area: items;
      padding-left: 20px;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
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
`;

export const LabelSelect = styled.label`
  margin-top: 10px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #484848;
  display: block;
`;
