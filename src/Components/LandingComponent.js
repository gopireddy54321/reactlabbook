import React, { Component } from 'react';
 
import { Link } from 'react-router-dom';
 
class LandingComponent extends Component {
 
    render() {
        return (
            <div>
                <h2>Landing Page</h2>
                <p>
                    <Link to={`/login`}>Login</Link>
                </p>
                <p>
                    <Link to={`/register`}>Register</Link>
                </p>
                <p>
                    <Link to={`/userlist`}>User List</Link>
                </p>
 
                
            </div>
        );
 
    }
 
}
 
export default LandingComponent;