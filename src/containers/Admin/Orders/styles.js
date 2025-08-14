import SimpleSelect from "../../../components/SimpleSelect";
import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    padding: 11px;
    border-radius: 11px;
`;//FIM

export const SelectStatus = styled(SimpleSelect)`
    width: 240px;
`;//FIM

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 22px 0;
    gap: 50px;
`;//FIM

const getStatusColor = (statusId) => {
  switch (statusId) {
    case 1: return '#f39c12'; // Pedido realizado - Laranja
    case 2: return '#3498db'; // Em Preparação - Azul
    case 3: return '#27ae60'; // Pedido Pronto - Verde
    case 4: return '#9b59b6'; // Pedido à Caminho - Roxo
    case 5: return '#e74c3c'; // Cancelado - Vermelho
    case 6: return '#2ecc71'; // Entregue - Verde claro
    default: return '#95a5a6'; // Todos/Padrão - Cinza
  }
};

export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => props.$isActiveStatus ? getStatusColor(props.$statusId) : props.theme.background_color};
    border-bottom: ${(props) => props.$isActiveStatus ? `2px solid ${getStatusColor(props.$statusId)}` : 'none'};
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${(props) => getStatusColor(props.$statusId)};
    }
`;//FIM