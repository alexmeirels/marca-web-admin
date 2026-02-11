import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import CourtCard, { type CourtInfo } from "./components/CourtCard";
import NewCourtModal from "./components/NewCourtModal";
import { CardsGrid, Container, HeaderContainer } from "./styles";
import Icon from "../../components/Icon";

const courts: CourtInfo[] = [
  {
    id: "quadra-1",
    name: "Quadra 1 - Society",
    surfaceType: "Grama Sintética",
    sports: ["Society", "Futsal"],
    statusLabel: "Disponível",
    statusColor: "#16A34A",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quadra-1",
    name: "Quadra 1 - Society",
    surfaceType: "Grama Sintética",
    sports: ["Society", "Futsal"],
    statusLabel: "Disponível",
    statusColor: "#16A34A",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quadra-1",
    name: "Quadra 1 - Society",
    surfaceType: "Grama Sintética",
    sports: ["Society", "Futsal"],
    statusLabel: "Disponível",
    statusColor: "#16A34A",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quadra-1",
    name: "Quadra 1 - Society",
    surfaceType: "Grama Sintética",
    sports: ["Society", "Futsal"],
    statusLabel: "Disponível",
    statusColor: "#16A34A",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Courts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <HeaderPage
          title="Minhas Quadras"
          subTitle="Configuração e gerenciamento do espaço"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FDB022",
            padding: "10px",
            margin: "0px 16px",
            borderRadius: 2,
            textTransform: "none",
            fontSize: 16,
            fontWeight: 500,
            justifyContent: "center",
            "&:hover": {
              bgcolor: "#FDB022",
              boxShadow: "none",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Icon name="plus" size={20} stroke="#FFF" />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#FFF",
                lineHeight: 1,
              }}
              fontWeight="bold"
            >
              {"Nova Quadra"}
            </Typography>
          </Box>
        </Button>
      </HeaderContainer>

      <CardsGrid>
        {courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </CardsGrid>

      <NewCourtModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}
