import React from 'react';
// import PropTypes from 'prop-type';

const Starships = (props) => {

        return (
            <div>
                <h3>Name: { props.name } </h3>

                <h3>Starship Class: { props.starship_class } </h3>

                <h3>Manufacturer: { props.manufacturer }</h3>

                <h3>Cost: { props.cost_in_credits } </h3>

                <h3>Max Speed: { props.max_atmosphering_speed } </h3>

                <h3>Hyperdrive Rating: {props.hyperdrive_rating}</h3>
            </div>
        )


}


export default Starships