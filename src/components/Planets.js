import React from 'react';
// import PropTypes from 'prop-type';

const Planets = (props) => {

        return (
            <div>
                <h3>Name: { props.name } </h3>

                <h3>Climate: { props.climate } </h3>

                <h3>Terrain: { props.terrain } </h3>

                <h3>Orbital Period: {props.orbital_period}</h3>
            </div>
        )


}


export default Planets