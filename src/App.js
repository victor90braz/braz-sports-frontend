import React from "react";
import AppStyle from "./AppStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <AppStyle>
      <Header />
      <HomePage />
      <Footer />
    </AppStyle>
  );
}

export default App;
