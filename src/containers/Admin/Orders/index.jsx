import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableHeaderCell,
  Paper
} from "../../../components/SimpleTable";
import { Row } from "./row";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { orderStatusOptions } from "./orderStatus";
import { FilterOption, Filter } from "./styles";

export function Orders() {
  const [orders, setOrders] = useState([]); //BACKUP
  const [filteredOrders, setFilteredOrders] = useState([]); //VALORES PARA A TELA
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders");

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

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
