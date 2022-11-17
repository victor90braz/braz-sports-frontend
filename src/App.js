import React from "react";
import AppStyle from "./AppStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyEvents from "./pages/MyEvents/MyEvents";

function App() {
  return (
    <AppStyle>
      <div className="containerHeader">
        <Header />
      </div>

      <div className="content">
        <MyEvents />
      </div>

      <div className="containerFooter">
        <Footer />
      </div>
    </AppStyle>
  );
}

export default App;
