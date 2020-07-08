import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import axios from '../axios/axios';

const FormInit = (props) => {

    const [cityName, setCityName] = useState(null)
    const [restaurantName, setRestaurantName] = useState(null)

    const submitForm = (event) => {
      event.preventDefault();
      let page = null
      props.onSubmitCity(cityName, restaurantName, page)
    }
  
    const inputCity = (event) => {
      setCityName(event.target.value)
    }

    const inputName = (event) => {
        setRestaurantName(event.target.value)
      }

      const inputCityFocus = useRef(null);
      const inputCityNameFocus = useRef(null);

    return(
        <form onSubmit={submitForm}>
            <div className="inputForm">
          <label htmlFor="inputCity">City:  </label>
          <input
            type="text"
            aria-label="Insert the city name"
            aria-labelledby="Input City name"
            aria-required="true"
            onChange={inputCity}
            name="inputCity"
            ref={inputCityFocus}
          ></input>
          </div>
          <div className="inputForm">
          <label htmlFor="inputName">Restaurant Name: </label>
          <input
            type="text"
            aria-label="Insert the restaurant name"
            aria-labelledby="Input Restaurant name"
            aria-required="true"
            onChange={inputName}
            name="inputName"
            ref={inputCityNameFocus}
          ></input>
          </div>
          <button type="submit">Find Restaurant</button>
        </form>
    )

}

const mapDispatchToProps = dispatch => {
    return {
      onSubmitCity: (city, restaurantName, page) => dispatch(actions.fetchData(city, restaurantName, page))
    };
  };

export default connect(null, mapDispatchToProps)(FormInit, axios);