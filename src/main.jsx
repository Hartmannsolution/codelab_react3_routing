import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Travels from "./pages/Travels";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginForm from "./components/LoginForm";
import ErrorPage from "./pages/error-page";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginForm />} errorElement={<ErrorPage />} />
      <Route path="/travels" element={<Travels />} errorElement={<ErrorPage />} />
      <Route path="/about" element={<About />} errorElement={<ErrorPage />} />
      <Route path="/admin" element={<Admin />} errorElement={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
