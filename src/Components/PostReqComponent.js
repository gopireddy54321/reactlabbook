import React from 'react';
 import Axios from 'axios';
class PostReqComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Name:'',
            password:'',
            mobile:'',
            email:''
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();

        const data = {
            "customerName": this.state.Name,
            "password":this.state.password,
            "mobileNumber": this.state.mobile,
            "emailId": this.state.email
        }
        Axios.post("http://localhost:8090/customer/addcustomer",data)
        .then(res => {         
            console.log(res); 
          })    


    }
    
 
    render() {    
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="post">
                <label> customerName:<input type="text" name="Name" value={this.state.Name} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label> password:<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label> mobileNumber:<input type="text" name="mobile" value={this.state.mobile} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label> emailId:<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/></label><br></br><br></br>
                
                <input type="submit" value="Submit" />
            </form>

            </div>           
        );
    }
}
 
export default PostReqComponent;