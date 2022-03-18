import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    console.log("Header");

    return (
      <header className="header">
        <i className="fab fa-pagelines header-logo"></i>
        <span>Habit Tracker</span>
        <span className="header-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
