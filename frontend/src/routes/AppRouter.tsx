import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PanelAdm from "../pages/AdmPanel";
import RegisterEditUser from "../pages/RegisterEditUser";
import { User } from "../pages/User";
import LoginPage from "../pages/loginPage";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/paneladm" element={<PrivateRoute />}>
          <Route path="/paneladm" element={<PanelAdm />} />
        </Route>
        <Route path="/registeredituser" element={<PrivateRoute />}>
          <Route path="/registeredituser" element={<RegisterEditUser />} />
        </Route>
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
};
