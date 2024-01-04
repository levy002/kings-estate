import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-omjwupug7w2kbo8z.us.auth0.com"
     clientId="lUEh3ru7rCG7yjzUPd2eLXu9YuPgxGTS"
     authorizationParams={{
      redirect_uri: "https://kings-estate.vercel.app/"
     }}
     audience="https://kings-estate-ib2g.vercel.app/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
