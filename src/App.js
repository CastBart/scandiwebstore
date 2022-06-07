//react components
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

// custom components
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
