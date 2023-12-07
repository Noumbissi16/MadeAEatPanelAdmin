import { Route, Routes } from "react-router-dom";
import SigninForm from "./auth/forms/SigninForm";
import {
  Commande,
  Dashboard,
  Facture,
  Restaurant,
  SingleRestaurant,
  Utilisateur,
} from "./root/pages";
import SignupForm from "./auth/forms/SignupForm";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import "./global.css";

function App() {
  return (
    // <div>
    <Routes>
      {/* public routes */}

      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/commandes" element={<Commande />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/utilisateurs" element={<Utilisateur />} />
        <Route
          path="/restaurants/restaurant/:id"
          element={<SingleRestaurant />}
        />
        <Route path="/commandes/commande/:id/facture" element={<Facture />} />
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
