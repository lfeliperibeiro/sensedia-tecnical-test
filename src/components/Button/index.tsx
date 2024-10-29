import { useState } from "react";
import { StyledButton } from "./button.styles";
import { FaTable } from "react-icons/fa";
import { PiCardsBold } from "react-icons/pi";

interface ButtonProps {
  tableVisualization: () => void;
  cardVisualization: () => void;
}

export function Button({ tableVisualization, cardVisualization }: ButtonProps) {
  const [activeButton, setActiveButton] = useState<"cards" | "table">("cards");

  const handleCardClick = () => {
    setActiveButton("cards");
    cardVisualization();
  };

  const handleTableClick = () => {
    setActiveButton("table");
    tableVisualization();
  };

  return (
    <>
      <StyledButton
        onPress={handleCardClick}
        isActive={activeButton === "cards"}
      >
        <p>
          Cartões <PiCardsBold />
        </p>
      </StyledButton>
      <StyledButton
        onPress={handleTableClick}
        isActive={activeButton === "table"}
      >
        <p>
          Tabelas <FaTable />
        </p>
      </StyledButton>
    </>
  );
}
