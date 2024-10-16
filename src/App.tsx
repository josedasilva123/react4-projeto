import { DefaultTemplate } from "./components/shared/template/DefaultTemplate";
import { ProfileLoader } from "./components/user/loaders/ProfileLoader";
import { Router } from "./routes/Router";
import "./styles/index.scss"

function App() {
  return (
    <>
      <ProfileLoader>
        <DefaultTemplate>
          <Router />
        </DefaultTemplate>
      </ProfileLoader>
    </>
  );
}

export default App;
