import {
  Card,
  Header,
  Title,
  RankingList,
  RankingItem,
  RankBadge,
  CourtInfo,
  CourtName,
  CourtMeta,
  Revenue,
} from "./styles";

const ranking = [
  {
    id: 1,
    name: "Society",
    occupancy: "92%",
    revenue: "R$ 12.850,00",
  },
  {
    id: 2,
    name: "Beach Tennis",
    occupancy: "85%",
    revenue: "R$ 12.850,00",
  },
  {
    id: 3,
    name: "Volei",
    occupancy: "78%",
    revenue: "R$ 12.850,00",
  },
  {
    id: 4,
    name: "Futevolei",
    occupancy: "65%",
    revenue: "R$ 12.850,00",
  },
];

export default function CourtRanking() {
  return (
    <Card>
      <Header>
        <Title>Ranking de Quadras por Receita</Title>
      </Header>
      <RankingList>
        {ranking.map((item) => (
          <RankingItem key={item.id}>
            <RankBadge>{item.id}</RankBadge>
            <CourtInfo>
              <CourtName>{`Quadra ${item.id} - ${item.name}`}</CourtName>
              <CourtMeta>{`Ocupação: ${item.occupancy}`}</CourtMeta>
            </CourtInfo>
            <Revenue>{item.revenue}</Revenue>
          </RankingItem>
        ))}
      </RankingList>
    </Card>
  );
}
