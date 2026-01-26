import Icon from "../Icon";
import { Container, IconBox, Title, Value } from "./styles";
import type { IStatCardProps } from "./types";

const StatCard = ({ title, value, icon }: IStatCardProps) => {
  return (
    <Container>
      <IconBox>
        <Icon name={icon} size={20} stroke="#FFFFFF" />
      </IconBox>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
};

export default StatCard;
