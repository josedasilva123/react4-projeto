import { UserPasswordForm } from "../../components/user/structures/forms/UserPasswordForm";
import { useUser } from "../../stores/user/useUser";

export function ProfilePage(){
    const user = useUser(store => store.user);

    return(
        <>
            <p>Boas vindas</p>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>

            <UserPasswordForm />
        </>
    )
}