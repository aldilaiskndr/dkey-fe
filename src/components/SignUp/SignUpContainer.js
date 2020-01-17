import React, {Component} from "react";

export default class SignUpContainer extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="App-header">
                <div className="form-container">
                    <h1>SIGN UP</h1>
                    <br/>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                   aria-describedby="basic-addon1" autoComplete="username"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span
                                    className="fa fa-key"/></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                                   aria-describedby="basic-addon1" autoComplete="current-password"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span
                                    className="fa fa-key"/></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Confirm password"
                                   aria-label="Please repeat your password"
                                   aria-describedby="basic-addon1" autoComplete="current-password"/>
                        </div>
                        <small className="detail-text text-muted">Please Repeat your password.</small>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="fa fa-envelope"/></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email address" aria-label="Email"
                                   aria-describedby="basic-addon1" autoComplete="username"/>
                        </div>
                        <small id="emailHelp" className="detail-text text-muted">We'll never share your email with
                            anyone else.</small>
                        <div className="input-group mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">First | Last name</span>
                                </div>
                                <input type="text" className="form-control"/>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="fa fa-calendar"/></span>
                            </div>
                            <input type="date" className="form-control" placeholder="Born date" aria-label="Born date"
                                   aria-describedby="basic-addon1" autoComplete="username"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="fa fa-home"/></span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="Origin City. Ex: Jakarta, Indonesia" aria-label="Base"
                                   aria-describedby="basic-addon1" autoComplete="username"/>
                        </div>
                        <button className="btn btn-warning" style={{width: '100%'}}>CREATE ACCOUNT</button>
                    </form>
                </div>
            </div>
        );
    }
}