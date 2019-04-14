import React, {Component} from 'react'
import {companylogin} from './UserFunctions'

class companyLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:'',
            error:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    }
    onChange(e,value){
        this.setState({[value]: e})
    }
    onSubmit(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
    companylogin(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
        
    }
    render(){
        return(
            <div className="containeer">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit = {this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name =" email"
                                    placeholder="Enter Email"
                                    defaultValue="Hello!"
                                   value= {this.state.email}
                                   onChange={(e) => {this.onChange(e.target.value, 'email')}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    name =" password"
                                    placeholder="Enter Password"
                                    value = {this.state.password}
                                    onChange={(e) => {this.onChange(e.target.value, 'password')}}
                                />
                            </div>
                            <button type="submit" className="btn btn-lh btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default companyLogin