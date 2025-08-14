import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageIcon } from "@phosphor-icons/react";
import {
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  SubmitButton,
} from "./styles";
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string(),
  file: yup
    .mixed()
    .test("fileSize", "Carregue arquivos de até 5MB!", (value) => {
      if (!value || value.length === 0) return true; // permite que seja opcional
      return value[0].size <= 5000000; // 5MB em bytes
    })
    .test("type", "Carregue apenas imagens PNG ou JPEG", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].type === "image/png" || value[0].type === "image/jpeg";
    }),
});

export function EditCategory() {
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  const {
    state: { category },
  } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: category.name,
    },
  });

  const onSubmit = async (data) => {
    const categoryFormData = new FormData();

    categoryFormData.append("name", data.name);
    categoryFormData.append("file", data.file[0]);

    await toast.promise(
      api.put(`/categories/${category.id}`, categoryFormData),
      {
        pending: "Editando a categoria...",
        success: "Categoria editada com sucesso!",
        error: "Falha ao editar categoria, tente novamente!",
      }
    );

    setTimeout(() => {
      navigate("/admin/categorias");
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome da Categoria</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
                register("file").onChange(value);
              }}
            />

            {fileName || "Escolher Nova Foto da Categoria"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Salvar Alterações</SubmitButton>
      </Form>
    </Container>
  );
}