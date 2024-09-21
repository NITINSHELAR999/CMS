import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaymentProductMapping from "./components/PaymentProductMapping";
import Register from "./components/Register";
import Customersideapplication from "./components/Customersideapplication";
import Formate from "./components/Formate";
import Paymentadvice from "./components/Paymentadvice";
import Template from "./components/Template";
import Role from "./components/Role";
import User from "./components/User";
import Authorizationmatrix from "./components/Authorizationmatrix";
import Customerconfiguration from "./components/Customerconfiguration";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route
            path="/PaymentProductMapping"
            element={<PaymentProductMapping />}
          />
          <Route path="/Formate" element={<Formate />} />
          <Route path="/Template" element={<Template />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/User" element={<User />} />
          <Route
            path="/Authorizationmatrix"
            element={<Authorizationmatrix />}
          />
          <Route path="/Paymentadvice" element={<Paymentadvice />} />
          <Route
            path="/Customerconfiguration"
            element={<Customerconfiguration />}
          />
          <Route
            path="/Customersideapplication"
            element={<Customersideapplication />}
          />
        </Routes>
      </BrowserRouter>

      {/* <Register />
      <PaymentProductMapping />
      <Formate />
      <Template />
      <Paymentadvice /> */}
    </div>
  );
}
