import { useCallback, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Button,
  Card,
  Container,
  Field,
  Form,
  Header,
  Input,
  Label,
  Subtitle,
  Title,
} from "./styles";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await login(email, password);
    },
    [email, login, password],
  );

  return (
    <Container>
      <Card>
        <Header>
          <Title>Entrar</Title>
          <Subtitle>Use seu e-mail e senha para acessar</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@empresa.com"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>

          <Field>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Field>

          <Button type="submit">Entrar</Button>
        </Form>
      </Card>
    </Container>
  );
}
