import React from 'react';
import Link from './Links';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link url="/" text="Home" />
        <Link url="/about" text="About" />
      </nav>
    );
  }
}

export default Navbar;