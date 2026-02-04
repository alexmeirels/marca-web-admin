import Icon from "../../../../components/Icon";
import Modal from "../../../../components/Modal";
import { useController, type UseFormReturn } from "react-hook-form";
import { CircularProgress } from "@mui/material";
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
import type { NewBookingFormValues } from "../../schema";
import { useEffect, useState } from "react";

type NewBookingModalProps = {
  open: boolean;
  onClose: () => void;
  form: UseFormReturn<NewBookingFormValues>;
  onSubmit: (values: NewBookingFormValues) => Promise<boolean> | boolean;
  isLoading?: boolean;
};

export default function NewBookingModal({
  open,
  onClose,
  form,
  onSubmit,
  isLoading = false,
}: NewBookingModalProps) {
  const { register, handleSubmit, watch, setValue } = form;
  const startedAt = watch("startedAt");
  const endedAt = watch("endedAt");
  const rentalDuration = watch("rentalDuration");

  const formatDateTime = (value?: Date) => {
    if (!value) return "";
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(value.getHours())}:${pad(value.getMinutes())}`;
  };

  const [totalDigits, setTotalDigits] = useState("");
  const { field: totalValueField } = useController({
    name: "totalValue",
    control: form.control,
  });

  useEffect(() => {
    if (typeof totalValueField.value === "number") {
      setTotalDigits(
        totalValueField.value > 0 ? String(totalValueField.value) : "",
      );
    }
  }, [totalValueField.value]);

  const formatCurrencyIntegerBRL = (digits: string) => {
    if (!digits) return "";
    return `R$ ${digits},00`;
  };

  const updateTotalValue = (digits: string) => {
    const normalized = digits.replace(/^0+(?=\d)/, "");
    setTotalDigits(normalized);
    totalValueField.onChange(normalized === "" ? 0 : Number(normalized));
  };

  useEffect(() => {
    if (!(startedAt instanceof Date) || Number.isNaN(startedAt.getTime())) {
      return;
    }
    if (typeof rentalDuration !== "number") {
      return;
    }
    const nextEnd = new Date(
      startedAt.getTime() + rentalDuration * 60 * 1000,
    );
    setValue("endedAt", nextEnd, { shouldValidate: true });
  }, [rentalDuration, setValue, startedAt]);
  const handleSave = handleSubmit(async (data) => {
    const shouldClose = await onSubmit(data);
    if (shouldClose) {
      onClose();
    }
  }, (errors) => {
    console.log("new-booking-errors", errors);
  });

  return (
    <Modal open={open} onClose={onClose} ariaLabel="Nova reserva">
      <Header>
        <HeaderGrid>
          <Title>Nova reserva</Title>
          <Subtitle>Insira os detalhes da nova reserva</Subtitle>
        </HeaderGrid>
        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          disabled={isLoading}
        >
          ×
        </CloseButton>
      </Header>

      <Form onSubmit={handleSave}>
        <GridTwo>
          <FieldGroup>
            <Label>Título *</Label>
            <Input placeholder="Título da reserva" {...register("title")} />
          </FieldGroup>
          <FieldGroup>
            <Label>Duração do aluguel</Label>
            <Select
              {...register("rentalDuration", {
                valueAsNumber: true,
                setValueAs: (value) => (value === "" ? undefined : value),
              })}
            >
              <option value="">Selecione</option>
              <option value={60}>1h</option>
              <option value={90}>1h30</option>
              <option value={120}>2h</option>
              <option value={150}>2h30</option>
              <option value={180}>3h</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
        </GridTwo>

        <GridTwo>
          <FieldGroup>
            <Label>Tipo de agenda</Label>
            <Select {...register("scheduleType")}>
              <option value="SINGLE">Única</option>
              <option value="RECURRING">Recorrente</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
          <FieldGroup>
            <Label>Status</Label>
            <Select {...register("status")}>
              <option value="PENDING">Pendente</option>
              <option value="CONFIRMED">Confirmado</option>
              <option value="CANCELLED">Cancelado</option>
            </Select>
            <SelectIcon>
              <Icon name="chevronUp" size={14} fill="#667085" />
            </SelectIcon>
          </FieldGroup>
        </GridTwo>

        <GridThree>
          <FieldGroup>
            <Label>Início</Label>
            <Input value={formatDateTime(startedAt)} readOnly />
          </FieldGroup>
          <FieldGroup>
            <Label>Fim</Label>
            <Input value={formatDateTime(endedAt)} readOnly disabled />
          </FieldGroup>
          <FieldGroup>
            <Label>Qtd. Pessoas *</Label>
            <Input
              type="number"
              placeholder="1"
              {...register("peopleAmount", {
                valueAsNumber: true,
                setValueAs: (value) => (value === "" ? undefined : value),
              })}
            />
          </FieldGroup>
        </GridThree>

        <GridTwo>
          <FieldGroup>
            <Label>Valor total  *</Label>
            <Input
              type="text"
              inputMode="numeric"
              placeholder="R$ 0,00"
              value={formatCurrencyIntegerBRL(totalDigits)}
              onKeyDown={(event) => {
                if (event.ctrlKey || event.metaKey || event.altKey) return;
                if (event.key === "Backspace") {
                  event.preventDefault();
                  updateTotalValue(totalDigits.slice(0, -1));
                  return;
                }
                if (event.key === "Delete") {
                  event.preventDefault();
                  updateTotalValue("");
                  return;
                }
                if (/^\d$/.test(event.key)) {
                  event.preventDefault();
                  updateTotalValue(totalDigits + event.key);
                }
              }}
              onPaste={(event) => {
                event.preventDefault();
                const pasted = event.clipboardData.getData("text");
                const digits = pasted.replace(/\D/g, "");
                updateTotalValue(totalDigits + digits);
              }}
            />
          </FieldGroup>
          <FieldGroup>
            <Label>Status de pagamento</Label>
            <Select {...register("paymentStatus")}>
              <option value="PENDING">Pendente</option>
              <option value="PAID">Pago</option>
              <option value="CANCELLED">Cancelado</option>
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
          <TextArea
            placeholder="Observações adicionais..."
            rows={4}
            disabled
          />
        </FieldGroup>

        <Footer>
          <GhostButton type="button" onClick={onClose} disabled={isLoading}>
            Cancelar
          </GhostButton>
          <PrimaryButton
            type="submit"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={18} /> : "Adicionar reserva"}
          </PrimaryButton>
        </Footer>
      </Form>
    </Modal>
  );
}
