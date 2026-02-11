import {
  ActionButton,
  Card,
  Content,
  Image,
  ImageWrapper,
  Row,
  StatusBadge,
  Tag,
  Tags,
  Title,
  Value,
} from "./styles";

export type CourtInfo = {
  id: string;
  name: string;
  surfaceType: string;
  sports: string[];
  statusLabel: string;
  statusColor: string;
  imageUrl: string;
};

type CourtCardProps = {
  court: CourtInfo;
};

export default function CourtCard({ court }: CourtCardProps) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={court.imageUrl} alt={court.name} />
        <StatusBadge $statusColor={court.statusColor}>
          {court.statusLabel}
        </StatusBadge>
      </ImageWrapper>

      <Content>
        <Title>{court.name}</Title>

        <Row>
          <span>Tipo de Piso:</span>
          <Value>{court.surfaceType}</Value>
        </Row>

        <div>
          <Row>
            <span>Esportes:</span>
          </Row>
          <Tags>
            {court.sports.map((sport) => (
              <Tag key={sport}>{sport}</Tag>
            ))}
          </Tags>
        </div>

        <ActionButton type="button">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="currentColor"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.33H5v-0.92l8.06-8.06.92.92L5.92 19.58zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
          </svg>
          Editar Quadra
        </ActionButton>
      </Content>
    </Card>
  );
}
