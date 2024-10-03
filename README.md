# E-commerce Site

Um projeto de e-commerce desenvolvido em React, utilizando Vite como bundler, com integração com um backend para gerenciar produtos e carrinho de compras.

## Funcionalidades

- **Listagem de Produtos**: Exiba uma lista de produtos disponíveis para compra.
- **Busca de Produtos**: Pesquise produtos com base na descrição.
- **Carrinho de Compras**: Adicione produtos ao carrinho, remova itens e visualize o total.
- **Persistência de Dados**: Os dados do carrinho são armazenados no `localStorage` para que os usuários não percam suas seleções ao atualizar a página.
- **Context API**: Gerenciamento de estado do carrinho usando Context API do React.

## Tecnologias Usadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Heroicons](https://heroicons.com/) (para ícones)

- **Backend**:
  - [Nestjs]
  - [Postgresql]

## Estrutura do Projeto

/ecommerce-site
│
├── /public
│   └── (Arquivos públicos)
│
├── /src
│   ├── /components
│   │   └── (Componentes reutilizáveis)
│   │
│   ├── /context
│   │   └── CartContext.js (Gerenciamento do carrinho)
│   │
│   ├── /pages
│   │   ├── Home.jsx (Página inicial)
│   │   ├── SearchProducts.jsx (Página de busca de produtos)
│   │   └── CartPage.jsx (Página do carrinho)
│   │
│   ├── /styles
│   │   └── (Estilos globais e específicos)
│   │
│   ├── App.jsx (Componente principal)
│   ├── index.js (Ponto de entrada da aplicação)
│   └── (Outros arquivos necessários)
│
├── package.json
└── README.md


## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

    git clone https://github.com/dannicleo/natura_front.git \n
  
    cd ecommerce-site

2. Instale as depenências \n
    npm install

3. Inicie o servidor de desenvolvimento \n
    npm run dev

4. Acesse a aplicação em http://localhost:5173 (ou outra porta, conforme configurado).