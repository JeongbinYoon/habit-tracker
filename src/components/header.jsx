import React, { Component } from "react";

class Header extends Component {
  render() {
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
