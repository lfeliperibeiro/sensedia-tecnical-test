import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableUser from "../components/TableUser";
import { User } from "../interface/user";

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: {
      street: "123 Main St",
      suite: "Apt 1",
      city: "Anytown",
      zipcode: "12345",
      geo: {
        lat: "0.0000",
        lng: "0.0000",
      },
    },
    phone: "123-456-7890",
    website: "johndoe.com",
    company: {
      name: "John Doe Inc.",
      catchPhrase: "Innovate and Inspire",
      bs: "business stuff",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane@example.com",
    address: {
      street: "456 Elm St",
      suite: "Apt 2",
      city: "Othertown",
      zipcode: "67890",
      geo: {
        lat: "0.0000",
        lng: "0.0000",
      },
    },
    phone: "098-765-4321",
    website: "janesmith.com",
    company: {
      name: "Jane Smith LLC",
      catchPhrase: "Empower and Achieve",
      bs: "business stuff",
    },
  },
];

describe("TableUser Component", () => {
  test("renders table headers correctly", () => {
    render(<TableUser users={[]} />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Telefone")).toBeInTheDocument();
  });

  test("renders user data correctly", () => {
    render(<TableUser users={mockUsers} />);

    mockUsers.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.phone)).toBeInTheDocument();
    });
  });

  test("renders correct number of rows", () => {
    render(<TableUser users={mockUsers} />);

    const rows = screen.getAllByRole("row");
    // +1 for the header row
    expect(rows).toHaveLength(mockUsers.length + 1);
  });
});
