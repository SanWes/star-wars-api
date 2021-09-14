import React from 'react';
// import PropTypes from 'prop-type';

const Species = (props) => {

        return (
            <div>
                <h3>Name: { props.name } </h3>

                <h3>Classification: { props.classification } </h3>

                <h3>Designation: { props.designation }</h3>

                <h3>Average Lifespan: { props.average_lifespan } </h3>

                <h3>Language: { props.language } </h3>

                
            </div>
        )


}


export default Species