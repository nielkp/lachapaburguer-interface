import styled from 'styled-components';
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';

const Box = styled.div`
  width: 100%;
`;

const CollapseContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${(props) => (props.$isOpen ? '1000px' : '0')};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Typography = styled.span`
  font-weight: ${(props) => (props.variant === 'h6' ? '600' : '400')};
  font-size: ${(props) => (props.variant === 'h6' ? '1.1rem' : '1rem')};
  color: #333;
`;

function Collapse({ in: isOpen, children }) {
  return <CollapseContainer $isOpen={isOpen}>{children}</CollapseContainer>;
}

function KeyboardArrowDownIcon() {
  return <CaretDownIcon size={20} />;
}

function KeyboardArrowUpIcon() {
  return <CaretUpIcon size={20} />;
}

export {
  Box,
  Collapse,
  IconButton,
  Typography,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
};
