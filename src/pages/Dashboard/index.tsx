import HeaderPage from "../../components/HeaderPage";
import StatCard from "../../components/StatCard";
import type { IconName } from "../../components/Icon";
import CourtRanking from "./components/CourtRanking";
import OccupancyChart from "./components/OccupancyChart";
import UpcomingGames from "./components/UpcomingGames";
import { Container, DashboardGrid, StatsGrid } from "./styles";

export default function Dashboard() {
  const stats: Array<{ title: string; value: string; icon: IconName }> = [
    {
      title: "Faturamento (Mês)",
      value: "R$ 38.070,00",
      icon: "wallet",
    },
    {
      title: "Reservas Hoje",
      value: "24",
      icon: "calendar",
    },
    {
      title: "Taxa de Ocupação",
      value: "78%",
      icon: "usersGroup",
    },
    {
      title: "Ticket Médio",
      value: "R$ 95,00",
      icon: "balls",
    },
  ];

  return (
    <Container>
      <HeaderPage title="Dashboard" subTitle="Visão estratégica do seu negócio" />
      <StatsGrid>
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </StatsGrid>
      <DashboardGrid>
        <OccupancyChart />
        <UpcomingGames />
      </DashboardGrid>
      <CourtRanking />
    </Container>
  );
}
