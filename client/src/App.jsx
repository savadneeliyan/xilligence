import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Authentication/PrivateRoutes";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
