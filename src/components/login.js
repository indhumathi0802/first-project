import React from 'react';
import axios from "axios";
//import Home from "./home.js";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",id:"",result:[]};
    }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            id: this.state.id,
            name: this.state.name
        }
        console.log(this.state.id);
        var userid=this.state.id;
        var username=this.state.name;
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>{
            //console.log(res.data);
            var x=res.data
            // x.map(name => (  
            //     console.log(name); 
            // ))
            var isset_data="";
            x.forEach((el)=>{
                if(el.id==userid && el.name==username){
                    isset_data=1;
                }
            })
            if(isset_data==1){
                //alert("Logged In Successfully!");
                window.open('./home.js');
            }else{
                alert("User Name and UserId mismatched!");
            }
          }).catch((err)=>{
            console.log(err);
            alert("notsubmit");
          })
      }
    
      handleChange = event =>{
        let nam= event.target.name;
        let val= event.target.value;
        this.setState({[nam]:val});
      }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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
                <p className="login-error">{this.state.errormessage}</p>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </form>
        );
    }
}

export default Login;