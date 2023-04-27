import React from "react";
import ReactDOM from "react-dom/client";
import About from "./component/About";
import Info from "./component/Info";
import Interest from "./component/Interest"
import Footer from "./component/Footer"

function App() {
    return (
      <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    );
};
export default App;