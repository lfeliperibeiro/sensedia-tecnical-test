import { TableBody } from "react-aria-components";
import { User } from "../../interface/user";

import {
  CellUserStyles,
  ColumnUserStyles,
  RowUserStyles,
  TableHeaderUserStyles,
  TableUserStyles,
} from "./table.styles";

interface TableUserProps {
  users: User[];
}

export function TableUser({ users }: TableUserProps) {
  return (
    <div>
      <TableUserStyles aria-label="Files" selectionMode="multiple">
        <TableHeaderUserStyles>
          <ColumnUserStyles isRowHeader>Nome</ColumnUserStyles>
          <ColumnUserStyles>Email</ColumnUserStyles>
          <ColumnUserStyles>Telefone</ColumnUserStyles>
        </TableHeaderUserStyles>
        <TableBody>
          {users.map((user) => (
            <RowUserStyles key={user.id}>
              <CellUserStyles>{user.name}</CellUserStyles>
              <CellUserStyles>{user.email}</CellUserStyles>
              <CellUserStyles>{user.phone}</CellUserStyles>
            </RowUserStyles>
          ))}
        </TableBody>
      </TableUserStyles>
    </div>
  );
}
