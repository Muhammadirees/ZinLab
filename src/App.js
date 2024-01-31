import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Bookmarks from "./components/Bookmark";
import ConvertFrom from "./components/ConvertFrom";
import ConvertTo from "./components/ConvertTo";
import Operations from "./components/Operations";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Bookmarks />
        <Operations />
        <ConvertFrom />
        <ConvertTo />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
