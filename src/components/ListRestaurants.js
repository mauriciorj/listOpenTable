import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import * as actions from '../store/actions/index';

const ListRestaurants = (props) => {

    const [listRest, setListRest] = useState(null)
    const[currPage, setCurrPage] = useState(null)

    const pagginationHandler = (page) => {

        if(props.data[0].total_entries > 25){
            let city = props.data[1];
            let restaurantName = null;
            let rightPage = page.selected + 1;
            props.onCityPage(city, restaurantName, rightPage)
        }
    };

    useEffect(() => {
        if(props.data !== null){
            setListRest(props.data[0].restaurants)
            setCurrPage(props.data[0].current_page)
        }else if(props.data !== null && props.data[0].current_page !== currPage){
            setListRest(props.data[0].restaurants)
        }
    },[pagginationHandler])

    if (props.data !== null) {
        var pages = (props.data[0].total_entries / 25)
    } else {
        var pages = 0;
    }

    return (
        <div>
            {(props.data !== null) ?
                <div className="cityName"><strong>Showing results for:</strong> {props.data[1]}</div>
                :
                null
            }
            <div>
            <React.Fragment>
                    {(listRest !== null) ?
                        listRest.map((item, id) => (

                            <li key={id}>
                                <h3>Name: {item.name}</h3>
                                <h4>Address: {item.address}</h4>
                                <h5>Price: {item.price}</h5>
                                <hr className="lineList"></hr>
                            </li>

                        ))
                        : null}
                </React.Fragment>
                {(props.data !== null) ?
                    (props.data[0].total_entries > 25)?
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        activeClassName={'active'}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        initialPage={props.data[0].current_page - 1}
                        pageCount={pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={pagginationHandler}
                    /> :null:
                    null}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onCityPage: (city, restaurantName, page) => dispatch(actions.fetchData(city, restaurantName, page))
    };
};

const mapStateToProps = state => {
    return {
        data: state.data,
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurants, axios);