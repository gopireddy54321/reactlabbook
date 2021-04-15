import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class GetReqComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            usersList: []
        }
    }
    componentDidMount() {
        Axios.get("http://localhost:8090/users").then(response => {
            const users = response.data;
            this.setState({
                usersList: users
            });
        });
    }
    render() {
        return (
            <div>
                <h3>-------------GetReqComponent--------------</h3>
                {
                    this.state.usersList !== undefined ?
                        <table border="1">
                            <caption>User Details</caption>
                            <thead>
                                <tr>
                                    <th>customerId</th>
                                    
                                    <th> password </th>
                                    <th> role </th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.usersList.map((user, index) =>
                                        <tr>
                                            <td>{user.customerId}</td>
                                    
                                            <td>{user.password}</td>
                                            <td>{user.role}</td>
                                            <td><Link to={`/customerbyId/${user.customerId}`}>View</Link></td>
                                        </tr>)

                                }
                            </tbody>
                        </table>
                        // this.state.usersList.map((user, index) =>
                        //     <div>{user.customerId} {user.password} {user.role} </div>)
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
export default GetReqComponent;