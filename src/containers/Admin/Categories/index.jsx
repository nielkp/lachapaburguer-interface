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
import { Container, EditButton, DeleteButton, CategoryImage } from "./styles";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      console.log(data);
      setCategories(data);
    }

    loadCategories();
  }, []);

  function editCategory(category) {
    navigate("/admin/editar-categoria", { state: { category } });
  }

  async function deleteCategory(categoryId, categoryName) {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja excluir a categoria "${categoryName}"?`
    );

    if (confirmDelete) {
      await toast.promise(
        api.delete(`/categories/${categoryId}`),
        {
          pending: "Excluindo categoria...",
          success: "Categoria excluída com sucesso!",
          error: "Falha ao excluir categoria, tente novamente!",
        }
      );

      // Atualizar a lista de categorias após exclusão
      const updatedCategories = categories.filter(
        (category) => category.id !== categoryId
      );
      setCategories(updatedCategories);
    }
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nome</TableHeaderCell>
              <TableHeaderCell align="center">Foto da Categoria</TableHeaderCell>
              <TableHeaderCell align="center">Editar Categoria</TableHeaderCell>
              <TableHeaderCell align="center">Excluir Categoria</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  {category.name}
                </TableCell>
                <TableCell align="center">
                  <CategoryImage src={category.url} alt={category.name} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editCategory(category)}>
                    <PencilIcon />
                  </EditButton>
                </TableCell>
                <TableCell align="center">
                  <DeleteButton onClick={() => deleteCategory(category.id, category.name)}>
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