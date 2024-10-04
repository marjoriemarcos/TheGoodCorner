import Header from './organisms/Header'
import { Outlet } from "react-router-dom";
import './css/app.css';

function App() {
  return (
      <>
          <Header />
          <Outlet />
      </>
  );
}

export default App
