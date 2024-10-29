import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button";

jest.mock("../components/Button/button.styles.tsx", () => ({
  StyledButton: ({ children, onPress, isActive }: any) => (
    <button
      onClick={onPress}
      style={{ backgroundColor: isActive ? "blue" : "gray" }}
    >
      {children}
    </button>
  ),
}));

jest.mock("react-icons/fa", () => ({
  FaTable: () => <span>FaTable</span>,
}));

jest.mock("react-icons/pi", () => ({
  PiCardsBold: () => <span>PiCardsBold</span>,
}));

describe("Button component", () => {
  it("should render the buttons with correct initial state", () => {
    render(
      <Button tableVisualization={jest.fn()} cardVisualization={jest.fn()} />
    );

    expect(screen.getByText("Cartões")).toBeInTheDocument();
    expect(screen.getByText("Tabelas")).toBeInTheDocument();
    expect(screen.getByText("Cartões").closest("button")).toHaveStyle(
      "background-color: blue"
    );
    expect(screen.getByText("Tabelas").closest("button")).toHaveStyle(
      "background-color: gray"
    );
  });

  it("should call cardVisualization and set activeButton to 'cards' when card button is clicked", () => {
    const cardVisualizationMock = jest.fn();
    const tableVisualizationMock = jest.fn();

    render(
      <Button
        tableVisualization={tableVisualizationMock}
        cardVisualization={cardVisualizationMock}
      />
    );

    fireEvent.click(screen.getByText("Cartões"));

    expect(cardVisualizationMock).toHaveBeenCalled();
    expect(screen.getByText("Cartões").closest("button")).toHaveStyle(
      "background-color: blue"
    );
    expect(screen.getByText("Tabelas").closest("button")).toHaveStyle(
      "background-color: gray"
    );
  });

  it("should call tableVisualization and set activeButton to 'table' when table button is clicked", () => {
    const cardVisualizationMock = jest.fn();
    const tableVisualizationMock = jest.fn();

    render(
      <Button
        tableVisualization={tableVisualizationMock}
        cardVisualization={cardVisualizationMock}
      />
    );

    fireEvent.click(screen.getByText("Tabelas"));

    expect(tableVisualizationMock).toHaveBeenCalled();
    expect(screen.getByText("Tabelas").closest("button")).toHaveStyle(
      "background-color: blue"
    );
    expect(screen.getByText("Cartões").closest("button")).toHaveStyle(
      "background-color: gray"
    );
  });
});
