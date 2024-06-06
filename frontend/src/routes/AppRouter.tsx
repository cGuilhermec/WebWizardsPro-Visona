import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import PanelAdm from "../pages/AdmPanel";
import RegisterEditUser from "../pages/RegisterEditUser";
import { User } from "../pages/User";
import LoginPage from "../pages/loginPage";
import { PrivateRoute } from "./PrivateRoute";
import RelatorioPage from "../pages/RelatorioPage";
import { AnimatePresence } from "framer-motion";
import MeuPerfil from "../pages/MeuPerfil";


export const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />

        <Route path="/paneladm" element={<PrivateRoute />}>
          <Route path="/paneladm" element={<PanelAdm />} />
        </Route>

        <Route path="/registeredituser" element={<PrivateRoute />}>
          <Route path="/registeredituser" element={<RegisterEditUser />} />
        </Route>
        
        <Route path="/relatoriopage" element={<PrivateRoute />}>
          <Route path="/relatoriopage" element={<RelatorioPage />} />
        </Route>

        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route path="/meuperfil" element={<PrivateRoute />}>
          <Route path="/meuperfil" element={<MeuPerfil />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
