import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
  Paper,
} from '../../../components/SimpleTable';
import { Row } from './row';
import { useEffect, useState, useRef } from 'react';
import { api } from '../../../services/api';
import { orderStatusOptions } from './orderStatus';
import { FilterOption, Filter, Container } from './styles';
import { toast } from 'react-toastify';
import Logo from '../../../assets/logotransparente.png';

export function Orders() {
  const [orders, setOrders] = useState([]); //BACKUP
  const [filteredOrders, setFilteredOrders] = useState([]); //VALORES PARA A TELA
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    async function loadOrders() {
      try {
        const { data } = await api.get('orders');
        setOrders(data);
        setFilteredOrders(data);
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      }
    }

    // Carregamento inicial
    loadOrders();

    // Configurar polling para atualizações automáticas a cada 30 segundos
    intervalRef.current = setInterval(() => {
      loadOrders();
      toast.info('🔄 Pedidos atualizados automaticamente!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }, 30000); // 30 segundos

    // Cleanup do interval quando o componente for desmontado
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Função para atualização manual
  const handleManualRefresh = async () => {
    try {
      const { data } = await api.get('orders');
      setOrders(data);
      setFilteredOrders(data);
      toast.success('📋 Pedidos atualizados manualmente!', {
        position: 'top-right',
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    }
  };

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
      address: order.address,
      deliveryTax: order.deliveryTax,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <h1 style={{ color: 'black' }}>Pedidos</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12px', color: '#28a745' }}>
              🔄 Atualização automática ativada (30s)
            </span>
            <button
              onClick={handleManualRefresh}
              style={{
                padding: '8px 15px',
                fontSize: '14px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              🔄 Atualizar Agora
            </button>
          </div>
        </div>
      </Container>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
            $statusId={status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableHeaderCell />
              <TableHeaderCell>Pedido</TableHeaderCell>
              <TableHeaderCell>Cliente</TableHeaderCell>
              <TableHeaderCell>Data do pedido</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
