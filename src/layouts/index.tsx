import React, { Component } from "react";
import styles from "./index.module.scss";

class MainLayout extends Component {
  render() {
    return (
      <>
        <div className={styles.main}>
          <div className="flex flex-row">
            <section className={styles.main_wrapper}>
              {this.props.children}
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default MainLayout;
