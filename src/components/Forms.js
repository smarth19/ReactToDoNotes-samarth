import React, { Component } from 'react'

export default class Forms extends Component {
    state = {
        name: '',
        email: '',
        address: ''
    }
    handleChange = e => {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <form>
                <h1>This Is A Form</h1>
                Name: <input onChange={this.handleChange} name='name' value={this.state.name} />
                Email: <input onChange={this.handleChange} name='email' value={this.state.email} />
                Address: <input onChange={this.handleChange} name='address' value={this.state.address} />
            </form>
        )
    }

}

// const Forms = () =>{
//     const handleChange = () =>{

//     }
//     return (
//         <form>
//             <h1>This Is A Form</h1>
//             Name: <input onChange={handleChange} name="name" />
//             Email: <input onChange={handleChange} name="email" />
//             Address: <input onChange={handleChange} name="address" />
//         </form>
//     )
// }