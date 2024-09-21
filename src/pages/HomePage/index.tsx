import { useUser } from "../../stores/user/useUser"

export function HomePage(){
    const user = useUser(store => store.user);
    console.log(user);

    return(
        <>
            <h1>Home page</h1>
            {user ? <p>{user.name}</p> : null}
        </>
    )
}