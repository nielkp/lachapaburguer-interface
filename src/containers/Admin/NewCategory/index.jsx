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
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Digite o nome da categoria!"),
  file: yup
    .mixed()
    .test("required", "Escolha um arquivo para continuar", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "Carregue arquivos de até 5mb!", (value) => {
      return value && value.length > 0 && value[0].size <= 5000000;
    })
    .test("type", "Carregue apenas imagens PNG ou JPEG", (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === "image/png" || value[0].type === "image/jpeg")
      );
    }),
});

export function NewCategory() {
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const categoryFormData = new FormData();

    categoryFormData.append("name", data.name);
    categoryFormData.append("file", data.file[0]);

    await toast.promise(api.post("/categories", categoryFormData), {
      pending: "Adicionando a categoria...",
      success: "Categoria criada com sucesso!",
      error: "Falha ao criar categoria, tente novamente!",
    });

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

            {fileName || "Escolher Foto da Categoria"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Adicionar Categoria</SubmitButton>
      </Form>
    </Container>
  );
}