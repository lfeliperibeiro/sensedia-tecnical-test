import { Cell, Column, Row, Table, TableHeader } from "react-aria-components";
import styled from "styled-components";

export const TableUserStyles = styled(Table)`
  padding: 0.286rem;
  border: 1px solid #666;
  color: #333;
  border-radius: 6px;
  background: #fff;
  outline: none;
  border-spacing: 0;
  min-height: 100px;
  align-self: start;
  max-width: 100%;
  word-break: break-word;
  forced-color-adjust: none;
`;

export const TableHeaderUserStyles = styled(TableHeader)`
  color: #333;
  text-align: left;
`;

export const RowUserStyles = styled(Row)`
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: #333;
  font-size: 1.072rem;
  position: relative;
  transform: scale(1);
`;

export const CellUserStyles = styled(Cell)`
  padding: 4px 8px;
  text-align: left;
  outline: none;
  transform: translateZ(0);

  &:first-child {
    border-radius: 6px 0 0 px;
  }

  &:last-child {
    border-radius: 0 6px 6px 0;
  }
`;

export const ColumnUserStyles = styled(Column)`
  padding: 4px 8px;
  text-align: left;
  outline: none;
`;
