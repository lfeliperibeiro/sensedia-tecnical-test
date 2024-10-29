import { InputFilter } from "./filter.styles";

interface FilterProps {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Filter({ filter, handleFilterChange }: FilterProps) {
  return (
    <InputFilter
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Filtrar por nome"
    />
  );
}
