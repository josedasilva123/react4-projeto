import { RegisterForm } from "../../components/user/structures/forms/RegisterForm";
import { Title } from "../../components/shared/fragments/typography/Title";

export function RegisterPage(){
    return(
        <>
            <Title tag="h1">Cadastro</Title>
            <RegisterForm />
        </>
    )
}