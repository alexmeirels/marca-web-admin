import {
  Card,
  Header,
  Title,
  GamesList,
  GameRow,
  GameInfo,
  GameName,
  GameMeta,
  TimeBadge,
  ShowMore,
} from "./styles";

const games = [
  { name: "Joao Silva", meta: "Quadra 01 • 18:30", remaining: "1h" },
  { name: "Maria Santos", meta: "Quadra 02 • 18:45", remaining: "2h" },
  { name: "Pedro Costa", meta: "Quadra 03 • 19:00", remaining: "1h45" },
  { name: "Pedro Costa", meta: "Quadra 03 • 19:00", remaining: "1h45" },
];

export default function UpcomingGames() {
  return (
    <Card>
      <Header>
        <Title>Próximos jogos</Title>
      </Header>
      <GamesList>
        {games.map((game, index) => (
          <GameRow key={`${game.name}-${index}`}>
            <GameInfo>
              <GameName>{game.name}</GameName>
              <GameMeta>{game.meta}</GameMeta>
            </GameInfo>
            <TimeBadge>{game.remaining}</TimeBadge>
          </GameRow>
        ))}
      </GamesList>
      <ShowMore type="button">Mostrar mais</ShowMore>
    </Card>
  );
}
