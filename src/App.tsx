import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/globals";
import { User } from "./interface/user";

const initialUserState: User[] = [];

function App() {
  const [users, setUsers] = useState<User[]>(initialUserState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <>
      <div>
        <GlobalStyle />
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
