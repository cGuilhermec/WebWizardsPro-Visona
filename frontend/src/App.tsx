import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { AppRouter } from "./routes/AppRouter";
import { CityProvider } from "./context/useCityContext";
import { NameForGraphProvider } from "./context/useNameForGraphContext";

export default function App() {
  return (
    <AuthProvider>
      <CityProvider>
        <NameForGraphProvider>
          <Router>
            <AppRouter />;
          </Router>
        </NameForGraphProvider>
      </CityProvider>
    </AuthProvider>
  );
}
