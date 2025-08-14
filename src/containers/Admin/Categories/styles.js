import styled from "styled-components";

export const Container = styled.div``; //FIM

export const CategoryImage = styled.img`
  height: 80px;
  padding: 11px;
  border-radius: 11px;
`; //FIM

export const EditButton = styled.button`
  border: 0;
  background-color: white;
  height: 33px;
  width: 33px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 26px;
    width: 26px;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.orange_hover};
    }
  }
`; //FIM

export const DeleteButton = styled.button`
  border: 0;
  background-color: white;
  height: 33px;
  width: 33px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 26px;
    width: 26px;
    fill: #cc1717;
  }

  &:hover {
    svg {
      fill: #ff0000;
    }
  }
`; //FIM