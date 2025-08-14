import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.orange || '#ff6b35'};
    box-shadow: 0 0 0 2px ${props => props.theme?.orange || '#ff6b35'}20;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Option = styled.option`
  padding: 8px;
  color: #333;
`;

function SimpleSelect({ options = [], value, onChange, placeholder, ...props }) {
  const handleChange = (e) => {
    const selectedOption = options.find(option => option.value === e.target.value);
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <SelectContainer>
      <StyledSelect 
        value={value?.value || ''} 
        onChange={handleChange}
        {...props}
      >
        {placeholder && (
          <Option value="" disabled>
            {placeholder}
          </Option>
        )}
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
}

export default SimpleSelect;