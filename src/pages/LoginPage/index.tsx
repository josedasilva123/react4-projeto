import { Title } from "../../components/shared/fragments/typography/Title";
import { LoginForm } from "../../components/user/structures/forms/LoginForm";

export function LoginPage() {
  return (
    <>
      <Title tag="h1">Login</Title>
      <LoginForm />
    </>
  );
}
