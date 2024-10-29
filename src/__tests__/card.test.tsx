import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { User } from "../interface/user";
import CardUser from "../components/CardUser";

describe("CardUser Component", () => {
  const users: User[] = [
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

  it("should render without crashing", () => {
    const { container } = render(<CardUser users={users} />);
    expect(container).toBeInTheDocument();
  });

  it("should display the correct number of users", () => {
    const { getAllByText } = render(<CardUser users={users} />);
    const nameElements = getAllByText(/Nome:/i);
    expect(nameElements.length).toBe(users.length);
  });

  it("should display user details correctly", () => {
    const { getByText } = render(<CardUser users={users} />);
    users.forEach((user) => {
      expect(getByText(`Nome: ${user.name}`)).toBeInTheDocument();
      expect(getByText(`Email: ${user.email}`)).toBeInTheDocument();
      expect(getByText(`Telefone: ${user.phone}`)).toBeInTheDocument();
    });
  });
});
