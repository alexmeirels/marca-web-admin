import Icon from "../../../../components/Icon";
import {
  Card,
  Row,
  SearchField,
  SearchIcon,
  Input,
  SelectField,
  Select,
  SelectIcon,
} from "./styles";

export default function ReservationFilters() {
  return (
    <Card>
      <Row>
        <SearchField>
          <SearchIcon>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M10.5 3a7.5 7.5 0 105.07 13.02l3.7 3.7a1 1 0 001.42-1.42l-3.7-3.7A7.5 7.5 0 0010.5 3zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
              />
            </svg>
          </SearchIcon>
          <Input placeholder="Buscar por ID ou nome do cliente..." />
        </SearchField>

        <SelectField>
          <Select>
            <option>Todos os Status</option>
          </Select>
          <SelectIcon>
            <Icon name="chevronUp" size={14} fill="#667085" />
          </SelectIcon>
        </SelectField>

        <SelectField>
          <Select>
            <option>Todos</option>
          </Select>
          <SelectIcon>
            <Icon name="chevronUp" size={14} fill="#667085" />
          </SelectIcon>
        </SelectField>
      </Row>
    </Card>
  );
}
