import { useMemo, useState } from "react";
import Modal from "../../../../components/Modal";
import { SupportedSport } from "../../../../utils/enum";
import {
  Actions,
  Checkbox,
  CheckboxLabel,
  CheckboxList,
  CloseButton,
  Field,
  Footer,
  Form,
  Header,
  HelperText,
  Label,
  ModalContent,
  OtherField,
  OtherInput,
  Section,
  SectionTitle,
  Subtitle,
  TextInput,
  Title,
  Toggle,
  ToggleRow,
  UploadInput,
} from "./styles";

type NewCourtModalProps = {
  open: boolean;
  onClose: () => void;
};

const sports = Object.values(SupportedSport);

export default function NewCourtModal({ open, onClose }: NewCourtModalProps) {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [otherSport, setOtherSport] = useState("");
  const [hourlyDigits, setHourlyDigits] = useState("");
  const hasOther = useMemo(
    () => selectedSports.includes(SupportedSport.Outro),
    [selectedSports],
  );

  const toggleSport = (sport: string) => {
    setSelectedSports((current) =>
      current.includes(sport)
        ? current.filter((item) => item !== sport)
        : [...current, sport],
    );
  };

  const formatCurrencyCentsBRL = (digits: string) => {
    if (!digits) return "";
    const padded = digits.padStart(3, "0");
    const cents = padded.slice(-2);
    const whole = padded.slice(0, -2);
    const withThousands = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${withThousands},${cents}`;
  };

  const updateHourlyValue = (digits: string) => {
    const normalized = digits.replace(/\D/g, "").replace(/^0+(?=\d)/, "");
    setHourlyDigits(normalized);
  };

  return (
    <Modal open={open} onClose={onClose} ariaLabel="Nova Quadra">
      <ModalContent>
        <Header>
          <div>
            <Title>Nova Quadra</Title>
            <Subtitle>Adicione uma nova quadra.</Subtitle>
          </div>
          <CloseButton type="button" onClick={onClose} aria-label="Fechar">
            ×
          </CloseButton>
        </Header>

        <Form>
          <Field>
            <Label htmlFor="court-name">Nome da Quadra *</Label>
            <TextInput
              id="court-name"
              name="courtName"
              placeholder="Ex: Quadra 1 - Society"
            />
          </Field>

          <Field>
            <Label htmlFor="hourly-rate">Valor por hora *</Label>
            <TextInput
              id="hourly-rate"
              name="hourlyRate"
              type="text"
              inputMode="numeric"
              placeholder="R$ 0,00"
              value={formatCurrencyCentsBRL(hourlyDigits)}
              onKeyDown={(event) => {
                if (event.ctrlKey || event.metaKey || event.altKey) return;
                if (event.key === "Backspace") {
                  event.preventDefault();
                  updateHourlyValue(hourlyDigits.slice(0, -1));
                  return;
                }
                if (event.key === "Delete") {
                  event.preventDefault();
                  updateHourlyValue("");
                  return;
                }
                if (/^\d$/.test(event.key)) {
                  event.preventDefault();
                  updateHourlyValue(hourlyDigits + event.key);
                }
              }}
              onPaste={(event) => {
                event.preventDefault();
                const pasted = event.clipboardData.getData("text");
                const digits = pasted.replace(/\D/g, "");
                updateHourlyValue(hourlyDigits + digits);
              }}
            />
          </Field>

          <Field>
            <Label htmlFor="capacity">Capacidade máxima *</Label>
            <TextInput
              id="capacity"
              name="capacity"
              type="number"
              min="1"
              step="1"
              placeholder="Ex: 12"
            />
          </Field>

          <Section>
            <SectionTitle>Esportes Suportados</SectionTitle>
            <CheckboxList>
              {sports.map((sport) => (
                <CheckboxLabel key={sport}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedSports.includes(sport)}
                    onChange={() => toggleSport(sport)}
                  />
                  {sport}
                </CheckboxLabel>
              ))}
            </CheckboxList>
            {hasOther && (
              <OtherField>
                <Label htmlFor="other-sport">Outro esporte</Label>
                <OtherInput
                  id="other-sport"
                  name="otherSport"
                  placeholder="Digite o esporte suportado"
                  value={otherSport}
                  onChange={(event) => setOtherSport(event.target.value)}
                />
              </OtherField>
            )}
          </Section>

          <Section>
            <SectionTitle>Status da Quadra</SectionTitle>
            <ToggleRow>
              <div>
                <HelperText>Marque como indisponível durante manutenção</HelperText>
              </div>
              <Toggle type="checkbox" aria-label="Indisponível" />
            </ToggleRow>
          </Section>

          <Section>
            <SectionTitle>Foto da Quadra</SectionTitle>
            <UploadInput type="file" />
            <HelperText>Recomendado: JPG ou PNG, até 5MB</HelperText>
          </Section>
        </Form>

        <Footer>
          <Actions>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="button">Criar Quadra</button>
          </Actions>
        </Footer>
      </ModalContent>
    </Modal>
  );
}
