import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props) {
        super(props); {
            this.state ={
                myform: [
                //     {fname:"ogbonna",
                //     lname: "confidence",
                //     email: "confy@gmail.com",
                //     password: "confy101010",
                    
                // },
                // {
                //     fname: "amanda",
                //     lname: "lawal",
                //     email: "lawal@gmail.com",
                //     password: "lawal101010"
                // },
                 
                ],
                
            }
        };
    }
    cancelCourse = () => { 
        this.myFormRef.reset();
      }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
      console.log(this.state.fname)
      console.log(this.state.lname)
      console.log(this.state.email)
      console.log(this.state.password)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.cancelCourse();
        this.setState({
            myform: [...this.state.myform, {fname:this.state.fname,
                 lname: this.state.lname, email: this.state.email,
                  password: this.state.password,}],
                 
                    
                


            
            
        })
    }
    render() {
        return (
              <>
                <section style={{margin: "2rem"}}>
                    <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
                        
                            <h1>CLASS CONTACT FORM</h1>
                            <div>
                            <label>First Name:</label> 
                            <input type="text" name="fname" value={this.state.myform.fname} onChange={this.handleChange} required></input>
                            <br/>
                            <label>Last Name:</label> 
                            <input type="text" name="lname" value={this.state.myform.lname} onChange={this.handleChange} required></input>
                            <br/>
                            </div>
                            <div>
                            <label>Email:</label> 
                            <input type="email" name="email" value={this.state.myform.email} onChange={this.handleChange} required></input>
                            <br/>
                            </div>
                            <div>
                            <label>Password:</label> 
                            <input type="password" name="password" value={this.state.myform.password} onChange={this.handleChange} required></input>
                            <br/>
                            </div>
                            <button onClick={this.handleSubmit}>Submit</button>
                    </form>
                    {this.state.myform.map((item, index) => {
                        return (
                            <div key={index}>
                                <br/>
                                <small>first name: {item.fname}</small><br/>
                                <small>last name: {item.lname}</small><br/>
                                <small>email: {item.email}</small><br/>
                                <small>password: {item.password}</small><br/>
                                
                            </div>
                        );
                    })}
                </section>
            </>
           );
    }
}

export default ClassForm;
