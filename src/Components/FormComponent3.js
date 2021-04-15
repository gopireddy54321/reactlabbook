import React from 'react';

class FormComponent3 extends React.Component {

    constructor() {
        super();
        this.state ={
            productid:'',
            productname:'',
            productcost:'',
            productonline:'',
            value:'',
            availableinstore:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { productid, productname, productcost} = this.state
         event.preventDefault()
        alert(`
      Product Id : ${productid}
      Product Name : ${productname}
      Product Cost : ${productcost}
    
    `)
    }

    render() {

        return (   
            <div>   
            <form onSubmit={this.handleSubmit}>
                <label>Product Id:<input type="text" name="productid" value={this.state.productid} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label>Product Name:<input type="text" name="productname" value={this.state.productname} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label>Product Cost:<input type="text" name="productcost" value={this.state.productcost} onChange={this.handleInputChange}/></label><br></br><br></br>
                <label>Product Online<input type="radio" value="Yes" name="productonline" onChange={this.handleInputChange}/>Yes
                <input type="radio" value="No" name="productonline" onChange={this.handleInputChange}/>No</label><br></br><br></br>
                <label>Product Category:<select value={this.state.select} name="select" onChange={this.handleInputChange}><br></br><br></br>
                    <option value="Grocery">Grocery</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothes">Clothes</option>
                </select></label><br></br><br></br>
                <label>Available in Store:<input type="checkbox" value="Big Bazar" name="store" onChange={this.handleInputChange}/>Big Bazar
                <input type="checkbox" value="DMart" name="store" onChange={this.handleInputChange}/>DMart
                <input type="checkbox" value="Reliance " name="store" onChange={this.handleInputChange}/>Reliance
                <input type="checkbox" value="megastore " name="store" onChange={this.handleInputChange}/>Mega store
                </label><br></br>
                <input type="submit" value="Add Product" />
            </form>
        </div >
    );
    }
}

export default FormComponent3;