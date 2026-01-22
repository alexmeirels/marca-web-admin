import SelectCompany from "../selectCompany";
import { Container } from "./styles";

const HeaderMainLayout = () => {
  const mockData = [
    {
      companyName: "Kajé",
      neighborhood: "Cidade Nova",
    },
    {
      companyName: "Jéka",
      neighborhood: "Buritis",
    },
  ];

  return <Container>
    <SelectCompany
      items={mockData}
    />
  </Container>;
};

export default HeaderMainLayout;
