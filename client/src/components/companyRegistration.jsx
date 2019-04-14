import React, {Component} from 'react'
import {companyregister} from './UserFunctions'

class companyRegistration extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            mobile:'',
            email: '',
            password:'',
            errors:{}
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile:this.state.mobile,
            email: this.state.email,
            password: this.state.password
        }
        companyregister(user).then(res => {
            this.props.history.push('/login')
        })
        
    }
    render(){
        return(
            <div className="containeer">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit = {this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name ="first_name"
                                    placeholder="Enter First Name"
                                    value = {this.state.first_name}
                                    onChange={(e) => {this.onChange(e.target.value, 'first_name')}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name =" last_name"
                                    placeholder="Enter Last Name"
                                    value = {this.state.last_name}
                                    onChange={(e) => {this.onChange(e.target.value, 'last_name')}}
                                />
                            </div>
                            <div class="_f _cq _cr _cs _ct _ct _cu _cl _cm">
                                <label id="input-label-mobile" class="_h _i _j _k _l" for="mobile"> Enter your phone number</label>
                                    <div class="_z _a0 _ar _as _at _au _av _bn _bo _bp _bq _br _bs _bt _bu _bv _bw _bx _e3 _e4 _e5 _e6 _c6 _c7 _c8 _b0 _c9 _dt _du _dv _dw" dir="ltr" >
                                        <div class="_z _a0 _ar _as _at _au _av _bn _bo _bp _bq _br _bs _bt _bu _bv _bw _bx _by _bz _c0 _c1 _c6 _c7 _c8 _b0 _c9 _c2 _c3 _c4 _c5 _f" >
                                            <div class="_z _a0 _ar _as _at _au _av _bn _bo _bp _bq _br _bs _bt _bu _bv _bw _bx _by _bz _c0 _c1 _c6 _c7 _c8 _b0 _c9 _c2 _c3 _c4 _c5 _cv _cv _cw _a _cx _eu _do _cz _d0 _d1 _d2 _d3 _d4 _d5 _d6 _d7 _d8 _d9 _da _db _dc _z _a0 _dd _dp _dq _dr _ds _dt _du _dv _dw _cs" >
                                                <div class="_z _a0 _ar _as _at _au _av _bn _bo _bp _bq _br _bs _bt _bu _bv _bw _bx _e3 _e4 _e5 _e6 _c6 _c7 _c8 _b0 _c9 _dt _du _dv _dw" >
                                                    <div class="_e2 _z _a0 _ar _as _at _au _av _bn _bo _bp _bq _bs _bt _bu _bv _bw _bx _by _bz _c0 _c1 _c6 _c7 _c8 _b0 _c9 _c2 _c3 _c4 _c5">
                                                        
                                                        <select aria-hidden="true" class="_bi _j _dx _dd _e0 _e1 _d4 _o" name="countryCode">
                                                            <option role="option" selected="" value="91">+91&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; India</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_z _a0 _ar _as _at _au _av _bn _bo _bp _bq _br _bs _bt _bu _bv _bw _bx _by _bz _c0 _c1 _c6 _c7 _c8 _b0 _c9 _c2 _c3 _c4 _c5" >
                                                <input aria-label="Enter your phone number" placeholder="Phone number" type="tel" name="phoneNumber" id="mobile" class="_cv _cv _cw _a _cx _cy _f _cz _d0 _d1 _d2 _d3 _d4 _d5 _d6 _d7 _d8 _d9 _da _db _dc _z _a0 _dd" value="" aria-describedby="error-caption-mobile form-title input-label-mobile" aria-required="true" autofocus="on"
                                                value = {this.state.mobile}
                                                onChange={(e) => {this.onChange(e.target.value, 'mobile')}}
                                                />
                                                    <div class="_de _df _dg _dh _di _an _bi icon icon_phone">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="alert" aria-live="assertive" aria-atomic="false">
                                        <div class="_h _dj _z _a0 _dk _dl">&nbsp;</div>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name =" email"
                                    placeholder="Enter Email"
                                    value = {this.state.email}
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
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default companyRegistration