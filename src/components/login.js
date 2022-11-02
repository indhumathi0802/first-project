import React from 'react';


class Login extends React.Component{
    render(){
        return(
            <form>
                <h2>Login Form</h2>
                <div>
                    <label for="uname"><b>Username: </b></label>
                <   input type="text" placeholder="Enter Username" name="name" onChange={this.handleChange} required />
                </div><br/>
                <div> 
                    <label for="psw"><b>User Id: </b></label>
                    <input type="text" placeholder="Enter Password" name="id" onChange={this.handleChange} required/>
                </div><br/>
                <div>
                    <button type="submit">Login</button>
                </div>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </form>
        );
    }
}

export default Login;