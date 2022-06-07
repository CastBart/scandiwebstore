import { Component } from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
