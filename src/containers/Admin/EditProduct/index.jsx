import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageIcon } from "@phosphor-icons/react";
import Select from "react-select";
import {
  Container,
  ErrorMessage,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  SubmitButton,
  ContainerCheckBox,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string(),
  price: yup.number().positive().typeError("Digite o preço do produto!"),
  category: yup.object(),
  description: yup.string(),
  offer: yup.bool(),
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

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const {
    state: { product },
  } = useLocation();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: product.name,
      price: product.price / 100,
      category: product.category,
      offer: product.offer,
    },
  });

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    productFormData.append("description", data.description);
    productFormData.append("offer", data.offer);

    // Só adiciona o arquivo se o usuário selecionou um novo
    if (data.file && data.file.length > 0) {
      productFormData.append("file", data.file[0]);
    }

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando o produto...",
      success: "Produto editado com sucesso!",
      error: "Falha ao editar produto, tente novamente!",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            step="any"
            {...register("price")}
            defaultValue={product.price / 100}
          />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Descrição</Label>
          <Input
            type="text"
            {...register("description")}
            defaultValue={product.description}
          />
          <ErrorMessage>{errors?.description?.message}</ErrorMessage>
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

            {fileName || "Escolher Foto do Produto"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <ContainerCheckBox>
          <input
            type="checkbox"
            defaultChecked={product.offer}
            {...register("offer")}
          />
          <Label>Produto em Oferta?</Label>
        </ContainerCheckBox>

        <SubmitButton>Editar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
