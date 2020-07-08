import React from 'react';
import ListRestaurants from './ListRestaurants';
import FormInit from './Form';

const MainComponent = (props) => {

  return (
    <div className="mainDiv">
      <header>
        <h1>Welcome to Restaurant Search</h1>
        <h2>Please insert the city name on the field above</h2>
      </header>
      <nav>
        <FormInit />
      </nav>
      <hr></hr>
      <ListRestaurants />
    </div>
  );
}

export default MainComponent;
