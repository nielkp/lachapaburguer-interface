import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`; //FIM

export const Form = styled.form`
  background: #565656;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`; //FIM

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`; //FIM

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`; //FIM

export const Input = styled.input`
  width: 391px;
  height: 58px;
  background: #fff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 18px;
  font-size: 18px;
`; //FIM

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 8px;
  padding: 14px;
  gap: 10px;
  color: #fff;

  input {
    opacity: 0;
    width: 1px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`; //FIM

export const SubmitButton = styled.button`
  width: 100%;
  height: 58px;
  border: 0;
  background: ${(props) => props.theme.orange};
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.orange_hover};
  }
`; //FIM

export const ErrorMessage = styled.p`
  font-size: 14px;
  line-height: 80%;
  color: #cc1717;
  font-weight: 600;
  height: 10px;
`; //FIM