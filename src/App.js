import React from "react";
import AppStyle from "./AppStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppStyle className="app-container">
      <Header className="container-header" />
      <Footer />
    </AppStyle>
  );
}

export default App;
