import { useState } from 'react';
import { Container, PaymentOption, PaymentIcon, PaymentInfo, ChangeInput } from './styles';
import { CreditCard, CurrencyDollar, DeviceMobile, Truck } from '@phosphor-icons/react';

export function PaymentMethodSelector({ selectedMethod, onMethodChange, changeFor, onChangeForChange, needsChange, onNeedsChangeChange }) {
  const paymentMethods = [
    {
      id: 'pix',
      name: 'PIX',
      description: 'Pagamento instantâneo',
      icon: <DeviceMobile size={24} />,
      color: '#32BCAD'
    },
    {
      id: 'dinheiro',
      name: 'Dinheiro',
      description: 'Pagamento na entrega',
      icon: <CurrencyDollar size={24} />,
      color: '#28a745'
    },
    {
      id: 'cartao_online',
      name: 'Cartão Online',
      description: 'Pagamento via Stripe',
      icon: <CreditCard size={24} />,
      color: '#007bff'
    },
    {
      id: 'cartao_entrega',
      name: 'Cartão na Entrega',
      description: 'Motoboy leva a maquininha',
      icon: <Truck size={24} />,
      color: '#6f42c1'
    }
  ];

  return (
    <Container>
      <h3>Forma de Pagamento</h3>
      
      {paymentMethods.map((method) => (
        <PaymentOption
          key={method.id}
          $isSelected={selectedMethod === method.id}
          $color={method.color}
          onClick={() => onMethodChange(method.id)}
        >
          <PaymentIcon $color={method.color}>
            {method.icon}
          </PaymentIcon>
          <PaymentInfo>
            <strong>{method.name}</strong>
            <span>{method.description}</span>
          </PaymentInfo>
        </PaymentOption>
      ))}
      
      {selectedMethod === 'dinheiro' && (
        <div style={{ marginTop: '15px' }}>
          <label>
            <input
              type="checkbox"
              checked={needsChange}
              onChange={(e) => onNeedsChangeChange(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Preciso de troco
          </label>
          
          {needsChange && (
            <ChangeInput
              type="number"
              placeholder="Troco para quanto? (R$)"
              value={changeFor || ''}
              onChange={(e) => onChangeForChange(e.target.value ? Number(e.target.value) : 0)}
              min="0"
              step="0.01"
            />
          )}
        </div>
      )}
    </Container>
  );
}