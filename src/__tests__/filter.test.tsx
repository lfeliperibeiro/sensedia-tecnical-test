import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filter } from "../components/Filter";

describe("Filter Component", () => {
  const mockHandleFilterChange = jest.fn();

  it("should render the input with the correct placeholder", () => {
    render(<Filter filter="" handleFilterChange={mockHandleFilterChange} />);
    const inputElement = screen.getByPlaceholderText("Filtrar por nome");
    expect(inputElement).toBeInTheDocument();
  });

  it("should display the correct value in the input", () => {
    render(
      <Filter filter="test" handleFilterChange={mockHandleFilterChange} />
    );
    const inputElement = screen.getByPlaceholderText("Filtrar por nome");
    expect(inputElement).toHaveValue("test");
  });

  it("should call handleFilterChange when the input value changes", () => {
    render(<Filter filter="" handleFilterChange={mockHandleFilterChange} />);
    const inputElement = screen.getByPlaceholderText("Filtrar por nome");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(mockHandleFilterChange).toHaveBeenCalledTimes(1);
  });
});
