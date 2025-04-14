import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/approutes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
