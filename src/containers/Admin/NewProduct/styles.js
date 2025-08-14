import SimpleSelect from "../../../components/SimpleSelect";
import styled from "styled-components";
import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`; //FIM

export const Form = styled.form`
  border-radius: 20px;
  background-color: ${(props) => props.theme.background_color};
  padding: 33px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`; //FIM

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`; //FIM

export const Label = styled.label`
  color: ${(props) => props.theme.orange};
  font-size: 22px;
`; //FIM

export const Input = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 11px;
  border: none;
  padding: 0 11px;
`; //FIM

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed white;
  border-radius: 5px;
  padding: 11px;
  display: flex;
  align-items: center;
  color: white;
  margin-top: 22px;

  > svg {
    width: 20px;
    height: 20px;
    fill: white;
    margin-right: 11px;
    margin-left: 15%;
  }

  input {
    display: none;
  }
`; //FIM



export const SubmitButton = styled(Button)`
  margin-top: 33px;
  width: 100%;
`; //FIM

export const ErrorMessage = styled.span`
  color: red;
  font-size: 15px;
  line-height: 80%;
  font-weight: 600;
`; //FIM

export const ContainerCheckBox = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`; //FIM
