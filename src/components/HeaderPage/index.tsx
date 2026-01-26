import { Typography } from "@mui/material";
import { Container } from "./styles";
import type { IHeaderPageProps } from "./types";

const HeaderPage = ({ title, subTitle }: IHeaderPageProps) => {
  return (
    <Container>
      <Typography
        sx={{
          color: "#181D27",
          fontSize: 24,
          fontWeight: 600,
          fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
        }}
      >
        {title}
      </Typography>
      {subTitle && (
        <Typography
          sx={{
            color: "#535862",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {subTitle}
        </Typography>
      )}
    </Container>
  );
};

export default HeaderPage;
