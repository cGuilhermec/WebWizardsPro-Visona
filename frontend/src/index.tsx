import ReactDOM from 'react-dom/client';
import App from './App';
import LoginPage from './pages/loginPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <LoginPage />
);
