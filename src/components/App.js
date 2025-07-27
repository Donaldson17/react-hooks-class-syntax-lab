import React from 'react';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import user from '../data/user'; // ✅ Match test's import

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home
          username={user.name}
          city={user.city}
          color={user.color}
        />
        <About
          bio={user.bio}
          links={user.links}
        />
      </div>
    );
  }
}

export default App;