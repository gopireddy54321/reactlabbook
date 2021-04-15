import React from 'react';
import Axios from 'axios';
class GetReqByIdComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        Axios.get("http://localhost:8090/users/"+id).then(response => {
            const users = response.data;
            this.setState({
                user: users
            });
        });
    }
    render() {
        return (
            <div>
                <h3>-------------GetReqByIdComponent--------------</h3>
                {
                    this.state.user !== undefined ?
                        <table border="1">
                            <caption>User Details</caption>
                            <thead>
                                <tr>
                                    <th> customerId </th>
                            
                                    <th> password </th>
                                    <th> role </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                        <tr>
                                            <td>{this.state.user.customerId}</td>
                                            
                                            <td>{this.state.user.password}</td>
                                            <td>{this.state.user.role}</td>
                                        </tr>
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
export default GetReqByIdComponent;