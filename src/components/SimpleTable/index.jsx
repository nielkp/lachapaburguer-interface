import styled from 'styled-components';

const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  text-align: ${props => props.align || 'left'};
  
  &:first-child {
    font-weight: 600;
  }
`;

const TableHeaderCell = styled.th`
  padding: 16px;
  text-align: ${props => props.align || 'left'};
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
`;

const Paper = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  Paper
};