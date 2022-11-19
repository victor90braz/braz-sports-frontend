import React from "react";
import AppStyle from "./AppStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailEvent from "./pages/DetailEvent/DetailEvent";

function App() {
  return (
    <AppStyle>
      <Header />

      <div className="content">
        <DetailEvent />
      </div>

      <Footer />
    </AppStyle>
  );
}

export default App;
