import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./router/route";
import ProtectedRouter from "./router/ProtectedRouter";
import Login from "./Pages/Authen/Login/Login";
import SignUp from "./Pages/Authen/Signup/SignUp";
import LayoutRoot from "./components/Layout/LayoutRoot/LayoutRoot";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {PublicRoute.map((route, index) => {
            const Page = route.component;
            const LayoutProps = route.Layout === "LayoutRoot" ? LayoutRoot : Layout;
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <ProtectedRouter
                    element={() => (
                      <LayoutProps>
                        <Page />
                      </LayoutProps>
                    )}
                    authRequired={route.authRequire}
                  />
                }
              />
            );
          })}
          {/* <Route path="/Register" element={<Register /> } /> */}
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
