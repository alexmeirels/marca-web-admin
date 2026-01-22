import { useState } from "react";
import {
  BoxIcon,
  Container,
  Dropdown,
  DropdownItem,
  DropdownTitle,
  ItemDot,
  ItemName,
  ItemNeighborhood,
  ItemText,
  NewCompanyButton,
  Wrapper,
} from "./styles";
import type { ISelectCompanyItem, ISelectCompanyProps } from "./types";
import Icon from "../../../../components/Icon";

const SelectCompany = ({ items }: ISelectCompanyProps) => {
  const [selectedCompany, setSelectedCompany] =
    useState<ISelectCompanyItem | null>(items[0] ?? null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Container type="button" onClick={() => setIsOpen((open) => !open)}>
        <ItemText>
          <ItemName>{selectedCompany?.companyName ?? "—"}</ItemName>
          <ItemNeighborhood>{selectedCompany?.neighborhood ?? ""}</ItemNeighborhood>
        </ItemText>
        <BoxIcon $open={isOpen}>
          <Icon name="chevronUp" size={20} fill="#94979C" />
        </BoxIcon>
      </Container>
      {isOpen && (
        <Dropdown>
          <DropdownTitle>ESTABELECIMENTOS</DropdownTitle>
          {items.map((item) => {
            const isSelected =
              selectedCompany?.companyName === item.companyName &&
              selectedCompany?.neighborhood === item.neighborhood;

            return (
              <DropdownItem
                key={`${item.companyName}-${item.neighborhood}`}
                type="button"
                disabled={isSelected}
                $isSelected={isSelected}
                onClick={() => {
                  setSelectedCompany(item);
                  setIsOpen(false);
                }}
              >
                <ItemText>
                  <ItemName>{item.companyName}</ItemName>
                  <ItemNeighborhood>{item.neighborhood}</ItemNeighborhood>
                </ItemText>
                <ItemDot $active={isSelected} />
              </DropdownItem>
            );
          })}
          <NewCompanyButton type="button">
            <Icon name="plus" size={20} fill="#CECFD2" />
            Novo Estabelecimento
          </NewCompanyButton>
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default SelectCompany;
