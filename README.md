# 🍔 LaChapa Burger - Frontend

Interface web para sistema de e-commerce de hamburgueria com integração Stripe para pagamentos.

## 🚀 Funcionalidades

- ✅ Catálogo de produtos com categorias
- ✅ Carrinho de compras interativo
- ✅ Sistema de autenticação
- ✅ Checkout integrado com Stripe
- ✅ Gestão completa de pedidos com status coloridos
- ✅ Ordenação automática de pedidos (mais recentes primeiro)
- ✅ Sistema de múltiplos métodos de pagamento (PIX, dinheiro, cartão)
- ✅ Interface responsiva e moderna
- ✅ Upload de imagens para produtos
- ✅ Painel administrativo completo

## 📋 Requisitos

- Node.js (v16+)
- NPM ou Yarn
- API LaChapa Burger rodando

## 🛠️ Instalação

### 1. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# API Base URL
VITE_BASE_URL=http://localhost:3003

# Stripe Public Key
VITE_STRIPE_KEY=pk_test_sua_chave_publica_stripe_aqui
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🎯 Funcionalidades Principais

### 🛒 E-commerce
- Navegação por categorias de produtos
- Adicionar/remover itens do carrinho
- Cálculo automático de totais e taxas de entrega
- Múltiplos métodos de pagamento (PIX, dinheiro, cartão online/entrega)
- Finalização de compra com Stripe

### 👤 Autenticação
- Registro de novos usuários
- Login/logout
- Proteção de rotas administrativas

### 🎛️ Painel Administrativo
- Gestão de produtos (CRUD)
- Gestão de categorias (CRUD)
- Visualização e atualização de pedidos com status coloridos
- Filtros de pedidos por status
- Ordenação automática de pedidos (mais recentes primeiro)
- Upload de imagens

### 💳 Pagamentos
- Integração completa com Stripe
- Múltiplos métodos: PIX, dinheiro, cartão online, cartão na entrega
- Sistema de troco para pagamento em dinheiro
- Processamento seguro de cartões
- Confirmação de pagamento em tempo real
- Popup de confirmação com fundo sólido

### 📊 Sistema de Status de Pedidos
- **Pedido Realizado** (Laranja) - Pedido criado e confirmado
- **Em Preparação** (Azul) - Pedido sendo preparado na cozinha
- **Pedido Pronto** (Verde) - Pedido finalizado e pronto para entrega
- **Pedido à Caminho** (Roxo) - Pedido saiu para entrega
- **Entregue** (Verde Claro) - Pedido entregue ao cliente
- **Cancelado** (Vermelho) - Pedido cancelado
- Ordenação automática: pedidos mais recentes aparecem primeiro
- Interface visual consistente entre área do cliente e painel administrativo

## 🗂️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/         # Botões customizados
│   ├── CartItems/      # Itens do carrinho
│   ├── CartResume/     # Resumo do carrinho
│   ├── Header/         # Cabeçalho da aplicação
│   ├── Stripe/         # Componentes do Stripe
│   └── ...
├── containers/         # Páginas principais
│   ├── Admin/          # Painel administrativo
│   ├── Cart/           # Página do carrinho
│   ├── Checkout/       # Página de checkout
│   ├── Home/           # Página inicial
│   ├── Login/          # Página de login
│   ├── Products/       # Página de produtos
│   └── Register/       # Página de registro
├── hooks/              # Custom hooks
├── routes/             # Configuração de rotas
├── services/           # Serviços (API, etc.)
├── styles/             # Estilos globais
└── utils/              # Utilitários
```

## 🔧 Tecnologias Utilizadas

### Core
- **React** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **React Router Dom** - Roteamento
- **Styled Components** - CSS-in-JS

### Formulários e Validação
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de schemas

### HTTP e Estado
- **Axios** - Cliente HTTP
- **React Context** - Gerenciamento de estado

### UI/UX
- **React Toastify** - Notificações
- **Phosphor Icons** - Ícones
- **React Multi Carousel** - Carrosséis
- **PropTypes** - Tipagem de props

### Pagamentos
- **@stripe/stripe-js** - SDK do Stripe
- **@stripe/react-stripe-js** - Componentes React do Stripe

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🌐 Deploy

### Build para Produção

```bash
npm run build
```

### Variáveis de Ambiente para Produção

```env
VITE_BASE_URL=https://sua-api.com
VITE_STRIPE_KEY=pk_live_sua_chave_stripe_producao
```

## 🔗 Integração com API

O frontend se comunica com a API através dos seguintes endpoints:

- **Autenticação**: `/users`, `/session`
- **Produtos**: `/products`, `/categories`
- **Pagamentos**: `/create-payment-intent`
- **Pedidos**: `/orders`

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎨 Temas e Estilos

- Design moderno e clean
- Paleta de cores focada em food delivery
- Animações suaves e micro-interações
- Componentes reutilizáveis e consistentes
