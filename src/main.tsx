import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "./index.css";
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { ModalProvider } from "./components/Ui/Modal/Modal";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
