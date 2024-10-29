import { User } from "../../interface/user";
import { CardContainer, Container } from "./card-user.styles";

interface CardUserProps {
  users: User[];
}

function CardUser({ users }: CardUserProps) {
  return (
    <Container>
      {users.map((user) => (
        <CardContainer key={user.id}>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.phone}</p>
        </CardContainer>
      ))}
    </Container>
  );
}

export default CardUser;
