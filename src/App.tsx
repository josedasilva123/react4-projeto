import { ProfileLoader } from "./components/user/loaders/ProfileLoader";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <ProfileLoader>
        <Router />
      </ProfileLoader>
    </>
  );
}

export default App;
