import HeaderPage from "../../components/HeaderPage";
import List, { type ListAction, type ListColumn } from "../../components/List";
import CustomerSearch from "./components/CustomerSearch";
import { Badge, Container } from "./styles";

type CustomerRow = {
  name: string;
  phone: string;
  email: string;
  reservations: number;
  lastReservation: string;
  totalSpent: string;
};

const rows: CustomerRow[] = [
  {
    name: "João Silva",
    phone: "(11) 98765-4321",
    email: "joao.silva@email.com",
    reservations: 12,
    lastReservation: "04/01/2026",
    totalSpent: "R$ 1.440,00",
  },
  {
    name: "Maria Santos",
    phone: "(11) 97654-3210",
    email: "maria.santos@email.com",
    reservations: 8,
    lastReservation: "04/01/2026",
    totalSpent: "R$ 800,00",
  },
  {
    name: "Pedro Costa",
    phone: "(11) 96543-2109",
    email: "pedro.costa@email.com",
    reservations: 15,
    lastReservation: "04/01/2026",
    totalSpent: "R$ 1.800,00",
  },
  {
    name: "Ana Lima",
    phone: "(11) 95432-1098",
    email: "ana.lima@email.com",
    reservations: 6,
    lastReservation: "04/01/2026",
    totalSpent: "R$ 720,00",
  },
  {
    name: "Carlos Souza",
    phone: "(11) 94321-0987",
    email: "carlos.souza@email.com",
    reservations: 10,
    lastReservation: "04/01/2026",
    totalSpent: "R$ 900,00",
  },
];


const columns: Array<ListColumn<CustomerRow>> = [
  { key: "name", header: "Nome" },
  { key: "phone", header: "Telefone" },
  { key: "email", header: "E-mail" },
  {
    key: "reservations",
    header: "Reservas",
    align: "center",
    render: (row) => <Badge>{row.reservations}</Badge>,
  },
  { key: "lastReservation", header: "Última Reserva" },
  { key: "totalSpent", header: "Total Gasto" },
];

const actions: Array<ListAction<CustomerRow>> = [
  {
    label: "Visualizar",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 5c5.05 0 9.27 3.11 11 7-1.73 3.89-5.95 7-11 7S2.73 15.89 1 12c1.73-3.89 5.95-7 11-7zm0 2c-3.93 0-7.42 2.12-9 5 1.58 2.88 5.07 5 9 5s7.42-2.12 9-5c-1.58-2.88-5.07-5-9-5zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
        />
      </svg>
    ),
    onClick: (row) => {
      console.log("view", row);
    },
  },
  {
    label: "Bloquear",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm3.54 4.46L12 12l3.54 3.54-1.08 1.08L10.92 13.08 7.38 16.62l-1.08-1.08L9.84 12 6.3 8.46l1.08-1.08 3.54 3.54 3.54-3.54 1.08 1.08z"
        />
      </svg>
    ),
    onClick: (row) => {
      console.log("block", row);
    },
  },
];

export default function Customers() {
  return (
    <Container>
      <HeaderPage
        title="Clientes"
        subTitle="Gerenciamento de relacionamento com clientes (CRM)"
      />
      <CustomerSearch />
      <List title="Lista de Clientes" columns={columns} rows={rows} actions={actions} />
    </Container>
  );
}
