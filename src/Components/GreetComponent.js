import React from 'react';
import PropTypes from 'prop-types'
 
// export default  Greet = ({firstName, lastName}) => {
//     return (<div>{`Hi ${firstName} ${lastName}`}!</div>)
//   };
 
function Greet(props) {
      return (
        <div>{`Hi ${props.firstName} ${props.lastName}`}</div>
      );
  }
 
   Greet.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
  };
 
export default Greet;