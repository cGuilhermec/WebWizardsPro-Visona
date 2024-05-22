import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/useAuth";
import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRouter />;
      </Router>
    </AuthProvider>
  );
}
