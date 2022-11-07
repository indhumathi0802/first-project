import React, { Component } from 'react';
import axios from "axios";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={results:[],result:[]};
        axios.get('https://gorest.co.in/public/v2/comments')
          .then(res=>{
            console.log(res);
            console.log(res.data);
            this.setState ({results:res.data});
          }).catch((err)=>{
            console.log(err);
            alert("notsubmit");
          })
    }
    // delete = () =>{
    //     axios.get('https://gorest.co.in/public/v2/comments')
    //     .then(res=>{
    //         console.log(res);
    //         console.log(res.data);
    //         this.setState ({results:res.data});
    //       }).catch((err)=>{
    //         console.log(err);
    //         alert("notsubmit");
    //       })
    // }
    post = () =>{
        axios.post('https://gorest.co.in/public/v2/comments', {
            post_id	:100,
            name:	"Indhumathi",
            email:	"indhu@gmail.com",
            body:	"tet"
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            this.setState ({result:res.data});
            alert("Post Successfully!");
          }).catch((err)=>{
            console.log(err);
            alert("notsubmit");
          })
    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <table border="1|0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {console.log(this.state.result)}
                    {this.state.results.map(x=> 
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.body}</td>
                            <td><button onClick={this.post}>post</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;