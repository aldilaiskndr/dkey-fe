import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class SignInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            visible: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    };
    handlePassword = (event) => {
        this.setState({password: event.target.value})
    };
    visiblePassword=()=> {
        this.setState({visible: !this.state.visible});
        this.createType()
    };
    createType(){
        if(this.state.visible){
            return "text"
        }else{
            return "password"
        }
    }
    validate = (event) => {
        event.preventDefault();
        const user = {username: 'aldila', password: 'password'};
        if (this.state.username===user.username && this.state.password===user.password) {
            console.log("mantap")
        } else {
            console.log("salah dong")
        }
    };

    render() {
        return (
            <div className="App-header">
                <div className="form-container">
                    <h1>SIGN IN</h1>
                    <br/>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1" autoComplete="username"
                                   onChange={event => this.handleUsername(event)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span
                                    className="fa fa-key"/></span>
                            </div>
                            <input type={this.createType()} className="form-control" placeholder="Password" aria-label="Password"
                                   aria-describedby="basic-addon1" autoComplete="current-password"
                                   onChange={event => this.handlePassword(event)}
                            />
                            <div className="input-group-append">
                                <button className="input-group-text btn btn-secondary" type="button" onClick={()=>this.visiblePassword()}><span
                                    className="fa fa-eye" /></button>
                                <span className="" id="basic-addon1"></span>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="checkbox" value={true} id="defaultCheck1"/>
                            <label htmlFor="defaultCheck1"
                                   style={{marginTop: '-5px', marginLeft: '8px', fontSize: '14px'}}>
                                Remember Me
                            </label>
                        </div>
                        <button className="btn btn-warning" style={{width: '100%'}} onClick={this.validate}>LOGIN</button>
                    </form>
                    <div className="login-footer">
                        <Link to="/forgot"><b className="forgot link">Forgot password?</b></Link>
                        <br/>
                        <p>Don't have an account? <Link to="/sign-up" className="forgot link"><b>Sign Up!</b></Link></p>
                    </div>
                </div>
            </div>
        );
    }
}