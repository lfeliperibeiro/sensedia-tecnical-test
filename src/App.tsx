import { useEffect, useState, lazy, Suspense } from "react";

import { User } from "./interface/user";
import { Container, HeaderContainer, GlobalStyle } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "./components/Button";
import { Filter } from "./components/Filter";

const TableUser = lazy(() => import("./components/TableUser/index"));
const CardUser = lazy(() => import("./components/CardUser"));

const initialUserState: User[] = [];

function App() {
  const [users, setUsers] = useState<User[]>(initialUserState);
  const [visualization, setVisualization] = useState("table");
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter") || "";
    setFilter(filterParam);

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filterParam}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [location.search]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    const params = new URLSearchParams(location.search);
    if (newFilter) {
      params.set("filter", newFilter);
    } else {
      params.delete("filter");
    }
    navigate({ search: params.toString() });
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <HeaderContainer>
          <Button
            tableVisualization={() => setVisualization("table")}
            cardVisualization={() => setVisualization("card")}
          />
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
        </HeaderContainer>
        <Suspense fallback={<div>Loading...</div>}>
          {visualization === "table" ? (
            <TableUser users={users} />
          ) : (
            <CardUser users={users} />
          )}
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
