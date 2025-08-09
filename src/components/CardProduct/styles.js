import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 22px;
      color: #ec710dff;
      line-height: 20px;
      font-weight: 700;
      //margin-top: 40px;
    }

    h2 {
      font-size: 16px;
      color: #5c5c5cff;
      line-height: 22px;
      font-weight: 700;
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
    }
  }
`; //FIM

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
  border-radius: 8px;
`; //FIM
