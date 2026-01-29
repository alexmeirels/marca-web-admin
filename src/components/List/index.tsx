import * as React from "react";
import {
  Card,
  Header,
  Title,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Actions,
  IconButton,
} from "./styles";

export type ListColumn<T> = {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  width?: string | number;
  render?: (row: T) => React.ReactNode;
};

export type ListAction<T> = {
  label: string;
  icon: React.ReactNode;
  onClick: (row: T) => void;
  hidden?: (row: T) => boolean;
};

type ListProps<T> = {
  title: string;
  columns: Array<ListColumn<T>>;
  rows: Array<T>;
  getRowKey?: (row: T, index: number) => string;
  actions?: Array<ListAction<T>>;
};

export default function List<T>({
  title,
  columns,
  rows,
  getRowKey,
  actions = [],
}: ListProps<T>) {
  return (
    <Card>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Table>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th
                key={column.key}
                $align={column.align}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </Th>
            ))}
            {actions.length > 0 ? <Th $align="right">Ações</Th> : null}
          </Tr>
        </Thead>
        <tbody>
          {rows.map((row, index) => (
            <Tr key={getRowKey ? getRowKey(row, index) : String(index)}>
              {columns.map((column) => (
                <Td key={column.key} $align={column.align}>
                  {column.render ? column.render(row) : (row as any)[column.key]}
                </Td>
              ))}
              {actions.length > 0 ? (
                <Td $align="right">
                  <Actions>
                    {actions
                      .filter((action) => !action.hidden?.(row))
                      .map((action) => (
                        <IconButton
                          key={action.label}
                          type="button"
                          aria-label={action.label}
                          onClick={() => action.onClick(row)}
                        >
                          {action.icon}
                        </IconButton>
                      ))}
                  </Actions>
                </Td>
              ) : null}
            </Tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
