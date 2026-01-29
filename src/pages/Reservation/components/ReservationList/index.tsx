import {
  Card,
  Header,
  Title,
  ExportButton,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  DateText,
  TimeText,
  Pill,
  StatusPill,
  Actions,
  IconButton,
} from "./styles";

const rows = [
  {
    id: "R-001",
    date: "04/01/2026",
    time: "18:00 - 19:30",
    client: "João Silva",
    court: "Quadra 1 - Society",
    value: "R$ 120,00",
    origin: "App",
    status: "Confirmada",
  },
  {
    id: "R-002",
    date: "04/01/2026",
    time: "19:30 - 21:00",
    client: "Pedro Costa",
    court: "Quadra 1 - Society",
    value: "R$ 120,00",
    origin: "Presencial",
    status: "Pendente",
  },
  {
    id: "R-003",
    date: "04/01/2026",
    time: "17:00 - 18:00",
    client: "Maria Santos",
    court: "Quadra 2 - Beach Tennis",
    value: "R$ 100,00",
    origin: "App",
    status: "Concluída",
  },
  {
    id: "R-004",
    date: "04/01/2026",
    time: "19:00 - 20:00",
    client: "Ana Lima",
    court: "Quadra 2 - Beach Tennis",
    value: "R$ 120,00",
    origin: "App",
    status: "Confirmada",
  },
  {
    id: "R-005",
    date: "04/01/2026",
    time: "16:00 - 17:00",
    client: "Carlos Souza",
    court: "Quadra 3 - Vôlei",
    value: "R$ 90,00",
    origin: "Presencial",
    status: "Concluída",
  },
  {
    id: "R-006",
    date: "03/01/2026",
    time: "18:00 - 19:00",
    client: "Juliana Alves",
    court: "Quadra 4 - Futevôlei",
    value: "R$ 85,00",
    origin: "App",
    status: "Cancelada",
  },
  {
    id: "R-007",
    date: "03/01/2026",
    time: "20:00 - 21:30",
    client: "Roberto Lima",
    court: "Quadra 1 - Society",
    value: "R$ 120,00",
    origin: "App",
    status: "Concluída",
  },
  {
    id: "R-008",
    date: "03/01/2026",
    time: "16:00 - 17:00",
    client: "Fernanda Silva",
    court: "Quadra 2 - Beach Tennis",
    value: "R$ 100,00",
    origin: "Presencial",
    status: "Concluída",
  },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "Confirmada":
      return "confirmed";
    case "Pendente":
      return "pending";
    case "Cancelada":
      return "cancelled";
    default:
      return "completed";
  }
};

export default function ReservationList() {
  return (
    <Card>
      <Header>
        <Title>Lista de Reservas</Title>
        <ExportButton type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 3h6l4 4v11a3 3 0 01-3 3H7a3 3 0 01-3-3V6a3 3 0 013-3zm5 1.5V8h3.5L12 4.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15z"
            />
          </svg>
          Exportar
        </ExportButton>
      </Header>

      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Data/Hora</Th>
            <Th>Cliente</Th>
            <Th>Quadra</Th>
            <Th>Valor</Th>
            <Th>Origem</Th>
            <Th>Status</Th>
            <Th $align="right">Ações</Th>
          </Tr>
        </Thead>
        <tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>
                <DateText>{row.date}</DateText>
                <TimeText>{row.time}</TimeText>
              </Td>
              <Td>{row.client}</Td>
              <Td>{row.court}</Td>
              <Td>{row.value}</Td>
              <Td>
                <Pill>{row.origin}</Pill>
              </Td>
              <Td>
                <StatusPill $variant={statusVariant(row.status)}>
                  {row.status}
                </StatusPill>
              </Td>
              <Td>
                <Actions>
                  <IconButton type="button" aria-label="Visualizar">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M12 5c5.05 0 9.27 3.11 11 7-1.73 3.89-5.95 7-11 7S2.73 15.89 1 12c1.73-3.89 5.95-7 11-7zm0 2c-3.93 0-7.42 2.12-9 5 1.58 2.88 5.07 5 9 5s7.42-2.12 9-5c-1.58-2.88-5.07-5-9-5zm0 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
                      />
                    </svg>
                  </IconButton>
                  <IconButton type="button" aria-label="Editar">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M4 17.25V20h2.75l8.1-8.1-2.75-2.75L4 17.25zM20.7 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </IconButton>
                  <IconButton type="button" aria-label="Cancelar">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm3.54 4.46L12 12l3.54 3.54-1.08 1.08L10.92 13.08 7.38 16.62l-1.08-1.08L9.84 12 6.3 8.46l1.08-1.08 3.54 3.54 3.54-3.54 1.08 1.08z"
                      />
                    </svg>
                  </IconButton>
                </Actions>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
