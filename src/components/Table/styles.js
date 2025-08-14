import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    border-radius: 10px;
  }
`; //FIM

export const Header = styled.thead`
  @media (max-width: 480px) {
    display: table-header-group;
  }
`; //FIM

export const Tr = styled.tr``; //FIM

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 1px solid #cdcdcd;
  min-width: 80px;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 12px;
    min-width: 60px;
  }

  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 10px;
    min-width: 50px;
    
    &:first-child {
      border-top-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
    }
  }
`; //FIM

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;
  vertical-align: middle;

  @media (max-width: 768px) {
    padding: 12px 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 10px;
  }
`; //FIM

export const Body = styled.tbody`
  @media (max-width: 480px) {
    display: table-row-group;
  }
`; //FIM
