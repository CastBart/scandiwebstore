import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { GET_CATEGORIES } from "../../api/queries";

import styles from "./Header.module.css";
//testing pushing to git
class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Query query={GET_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            const { categories } = data;
            return (
              <nav className={styles.nav}>
                <ul className={styles.categories}>
                  {categories.map((category) => {
                    return <li key={category}>{category.name}</li>;
                  })}
                </ul>
              </nav>
            );
          }}
        </Query>
      </header>
    );
  }
}

export default Header;
