import Header from './Header'
import { Outlet } from "react-router-dom";
import './css/index.css';

function App() {
  return (
      <>
          <Header />
          <Outlet />
      </>
  );
}

export default App
