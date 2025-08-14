import { ListIcon, ListPlusIcon, ReceiptIcon } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <ReceiptIcon size={33} />
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <ListIcon size={33} />,
    },
    {
        id: 3,
        label: 'Novo Produto',
        path: '/admin/novo-produto',
        icon: <ListPlusIcon size={33} />,
    },
]