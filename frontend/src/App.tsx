import { AuthProvider } from "./context/useAuth";
import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />;
    </AuthProvider>
  );
}
