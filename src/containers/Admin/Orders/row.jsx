import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  IconButton,
  Typography,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
} from '../../../components/SimpleCollapse';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
} from '../../../components/SimpleTable';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatData';
import { ProductImage, SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';

export function Row({ row, setOrders, orders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function newStatusOrder(id, status) {
    try {
      setLoading(true);
      await api.put(`orders/${id}`, { status });
      const newOrders = orders.map((order) =>
        order._id === id ? { ...order, status } : order
      );
      setOrders(newOrders);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((status) => status.id !== 0)}
            placeholder="Status"
            value={orderStatusOptions.find(
              (status) => 
                status.value === row.status || 
                (status.value === 'Pedido realizado' && row.status === 'Pedido realizado.')
            )}
            onChange={(status) => newStatusOrder(row.orderId, status.value)}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Quantidade</TableHeaderCell>
                    <TableHeaderCell>Produto</TableHeaderCell>
                    <TableHeaderCell>Categoria</TableHeaderCell>
                    <TableHeaderCell>Preço Unit.</TableHeaderCell>
                    <TableHeaderCell>Subtotal</TableHeaderCell>
                    <TableHeaderCell>Foto do Produto</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.quantity}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <span style={{ color: '#28a745', fontWeight: 600 }}>
                          R$ {(product.price / 100).toFixed(2)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span style={{ color: '#28a745', fontWeight: 600 }}>
                          R${' '}
                          {((product.price * product.quantity) / 100).toFixed(
                            2
                          )}
                        </span>
                      </TableCell>
                      <TableCell>
                        <ProductImage src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Resumo Financeiro */}
              <Box
                sx={{
                  marginTop: 3,
                  padding: 3,
                  backgroundColor: '#fff3cd',
                  borderRadius: 2,
                  border: '1px solid #ffeaa7',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{
                    color: '#856404',
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  💳 Resumo Financeiro
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#856404' }}>
                    <strong>🛒 Subtotal dos Produtos: </strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#28a745', fontWeight: 600 }}
                  >
                    R${' '}
                    {(
                      row.products.reduce(
                        (total, product) =>
                          total + product.price * product.quantity,
                        0
                      ) / 100
                    ).toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#856404' }}>
                    <strong>🚚 Taxa de Entrega: </strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: '#28a745', fontWeight: 600 }}
                  >
                    R$ {(row.deliveryTax / 100).toFixed(2)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 2,
                    paddingTop: 2,
                    borderTop: '2px solid #ffeaa7',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: '#856404', fontWeight: 'bold' }}
                  >
                    <strong>💰 Total do Pedido:</strong>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#28a745',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                    }}
                  >
                    R${' '}
                    {(
                      (row.products.reduce(
                        (total, product) =>
                          total + product.price * product.quantity,
                        0
                      ) +
                        row.deliveryTax) /
                      100
                    ).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {/* Informações de Entrega */}
              <Box
                sx={{
                  marginTop: 3,
                  padding: 3,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 2,
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{
                    color: '#495057',
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {'📍 Informações de Entrega: '}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#6c757d',
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: '#495057' }}>Endereço:</strong>{' '}
                  {row.address}
                </Typography>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    deliveryTax: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
