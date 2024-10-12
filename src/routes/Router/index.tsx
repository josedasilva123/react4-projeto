import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { SingleAdvertPage } from "../../pages/SingleAdvertPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { MyAdvertsPage } from "../../pages/MyAdvertsPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { PublicRoutes } from "../PublicRoutes";
import { PrivateRoutes } from "../PrivateRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anuncio/:id" element={<SingleAdvertPage />} />

      <Route element={<PublicRoutes />}>
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/meus-anuncios" element={<MyAdvertsPage />} />
        <Route path="/meu-perfil" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
