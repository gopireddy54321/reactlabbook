import React from 'react';
 import Axios from 'axios';
class UserListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            usersList:[]
        }
        
    }
    componentDidMount(){
        Axios.get("http://localhost:8090/customer/getallcustomers").then(response=>{const users = response.data;
            this.setState({
                usersList:users
            }); })
    }
    
    
 
    render() {    
        return (
            <div>
                {this.state.usersList !== undefined ?
                this.state.usersList.map((user,index) =>
                    <div>{user.customerId}{user.password}{user.role}</div>)
                    :<h3>LOADING</h3>
                }
            </div>           
        );
    }
}
 
export default UserListComponent;