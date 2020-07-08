import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import { connect } from 'react-redux';

const ListRestaurants = (props) => {

    const [listRes, setListRes] = useState(null)

    useEffect(() => {
        if (props !== null) {
            setListRes(props.data)
        }
    }, [props])

    console.log(props)

    return (
        <div>
            {(listRes !== null) ?
                <div className="cityName"><strong>Showing results for:</strong> {listRes[1]}</div> :
                null
            }
            <div>
                <ul>
                    {(listRes !== null) ?
                        listRes[0].restaurants.map((item, id) => (

                            <li key={id}>
                                <h3>Name: {item.name}</h3>
                                <h4>Address: {item.address}</h4>
                                <h5>Price: {item.price}</h5>
                                <hr className="lineList"></hr>
                            </li>

                        ))
                        : null}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(ListRestaurants, axios);