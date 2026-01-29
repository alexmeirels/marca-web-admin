import Icon from "../../../../components/Icon";
import Modal from "../../../../components/Modal";
import {
  Header,
  Title,
  Subtitle,
  CloseButton,
  Form,
  FieldGroup,
  Label,
  Input,
  Select,
  TextArea,
  GridTwo,
  GridThree,
  Footer,
  GhostButton,
  PrimaryButton,
  HelpBadge,
  SelectIcon,
  HeaderGrid,
} from "./styles";

type NewBookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function NewBookingModal({
  open,
  onClose,
}: NewBookingModalProps) {
  return (
    <Modal open={open} onClose={onClose} ariaLabel="Nova reserva">
      <Header>
        <HeaderGrid>
          <Title>Nova reserva</Title>
          <Subtitle>Insira os detalhes da nova reserva</Subtitle>
        </HeaderGrid>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar modal">
          ×
        </CloseButton>
      </Header>

      <Form>
        <GridTwo>
          <FieldGroup>
            <Label>Nome completo</Label>
            <Input placeholder="Search for company" />
          </FieldGroup>
          <FieldGroup>
            <Label>Telefone</Label>
            <Input placeholder="(00) 0 0000-0000" />
          </FieldGroup>
        </GridTwo>

        <GridTwo>
          <FieldGroup>
            <Label>Esporte</Label>
            <Select>
              <option>Selecione o esporte</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
          <FieldGroup>
            <Label>Quadra</Label>
            <Select>
              <option>Selecione a quadra</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
        </GridTwo>

        <GridThree>
          <FieldGroup>
            <Label>Data</Label>
            <Input placeholder="DD/MM/AAAA" />
          </FieldGroup>
          <FieldGroup>
            <Label>Hora - Início</Label>
            <Input placeholder="hh:mm" />
          </FieldGroup>
          <FieldGroup>
            <Label>Hora - Fim</Label>
            <Input placeholder="hh:mm" />
          </FieldGroup>
        </GridThree>

        <GridTwo>
          <FieldGroup>
            <Label>Valor</Label>
            <Input placeholder="R$ 0,00" />
          </FieldGroup>
          <FieldGroup>
            <Label>Forma de pagamento</Label>
            <Select>
              <option>Selecione</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
        </GridTwo>

        <FieldGroup>
          <Label>
            Observações internas
            <HelpBadge>?</HelpBadge>
          </Label>
          <TextArea placeholder="Observações adicionais..." rows={4} />
        </FieldGroup>

        <Footer>
          <GhostButton type="button" onClick={onClose}>
            Cancelar
          </GhostButton>
          <PrimaryButton type="button">Adicionar reserva</PrimaryButton>
        </Footer>
      </Form>
    </Modal>
  );
}
