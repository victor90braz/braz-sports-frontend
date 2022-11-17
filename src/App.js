import React from "react";
import AppStyle from "./AppStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyEvents from "./pages/MyEvents/MyEvents";

function App() {
  return (
    <AppStyle>
      <Header />

      <div className="content">
        <MyEvents />
      </div>

      <Footer />
    </AppStyle>
  );
}

export default App;
