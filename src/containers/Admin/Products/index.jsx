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
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container, EditButton, DeleteButton, ProductImage } from "./styles";
import {
  CheckCircleIcon,
  PencilIcon,
  XCircleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { formatPrice } from "../../../utils/formatData";
import { useNavigate } from "react-router-dom";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("products");
      console.log(data);
      setProducts(data);
    }

    loadProducts();
  }, []);

  function isOffer(offer) {
    if (offer) {
      return <CheckCircleIcon color="green" size="26px" />;
    } else {
      return <XCircleIcon color="red" size="26px" />;
    }
  }

  function editProduct(product) {
    navigate("/admin/editar-produto", { state: { product } });
  }

  async function deleteProduct(productId, productName) {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja excluir o produto "${productName}"?`
    );

    if (confirmDelete) {
      await toast.promise(
        api.delete(`/products/${productId}`),
        {
          pending: "Excluindo produto...",
          success: "Produto excluído com sucesso!",
          error: "Falha ao excluir produto, tente novamente!",
        }
      );

      // Atualizar a lista de produtos após exclusão
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    }
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nome</TableHeaderCell>
              <TableHeaderCell align="center">Preço</TableHeaderCell>
              <TableHeaderCell align="center">Produto em Oferta</TableHeaderCell>
              <TableHeaderCell align="center">Foto do Produto</TableHeaderCell>
              <TableHeaderCell align="center">Editar Produto</TableHeaderCell>
              <TableHeaderCell align="center">Excluir Produto</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}

              >
                <TableCell>
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  {formatPrice(product.price / 100)}
                </TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <ProductImage src={product.url} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editProduct(product)}>
                    <PencilIcon />
                  </EditButton>
                </TableCell>
                <TableCell align="center">
                  <DeleteButton onClick={() => deleteProduct(product.id, product.name)}>
                    <TrashIcon />
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
