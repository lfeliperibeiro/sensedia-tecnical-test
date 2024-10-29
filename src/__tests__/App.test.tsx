import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { User } from "../interface/user";
import App from "../App";

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
    name: "Jane Doe",
    username: "janedoe",
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
    website: "janedoe.com",
    company: {
      name: "Jane Doe LLC",
      catchPhrase: "Empower and Achieve",
      bs: "business stuff",
    },
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsers),
  })
) as jest.Mock;

describe("App Component", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test("renders App component and fetches users", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    });
  });

  test("filters users based on input", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText(/Filtrar por nome/i), {
      target: { value: "Jane" },
    });

    await waitFor(() => {
      expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    });
  });
});
