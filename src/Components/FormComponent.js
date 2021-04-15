import React from 'react';
class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID:'',
            Name: '',
            Salary:'',
            Department:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);       
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }   
    handleSubmit(event) {
        alert(""+this.state.ID+" "+this.state.Name+" "+this.state.Salary+" "+this.state.Department);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>
                                    <input type="text" name="ID" value={this.state.ID} onChange={this.handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>
                                    <input type="text" name="Salary" value={this.state.Salary} onChange={this.handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>
                                    <input type="text" name="Department" value={this.state.Department} onChange={this.handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="submit" value="Add Employee" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <p>{this.state.ID} {this.state.Name} {this.state.Salary} {this.state.Department}</p>
            </div>     
        );
    }
}
export default FormComponent;
