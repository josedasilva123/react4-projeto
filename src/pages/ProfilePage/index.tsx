import { Text } from "../../components/shared/fragments/typography/Text";
import { Title } from "../../components/shared/fragments/typography/Title";
import { UserPasswordForm } from "../../components/user/structures/forms/UserPasswordForm";
import { useUser } from "../../stores/user/useUser";

export function ProfilePage(){
    const user = useUser(store => store.user);

    return(
        <>
            <Text tag="p">Boas vindas</Text>
            <Title tag="h2">{user?.name}</Title>
            <Text tag="p">{user?.email}</Text>

            <UserPasswordForm />
        </>
    )
}