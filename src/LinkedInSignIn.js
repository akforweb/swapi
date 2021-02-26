import React, {Component} from "react";

import {LinkedIn} from "react-linkedin-login-oauth2";

class LinkedInSignIn extends Component {
    state = {
        code: "",
        errorMessage: ""
    };

    handleSuccess = (data) => {
        this.setState({
            code: data.code,
            errorMessage: ""
        });
    };

    handleFailure = (error) => {
        this.setState({
            code: "",
            errorMessage: error.errorMessage
        });
    };

    render() {
        // const {code, errorMessage} = this.state;

        return <>
            <LinkedIn
                clientId="81lx5we2omq9xh"
                onFailure={this.handleFailure}
                onSuccess={this.handleSuccess}
                redirectUri={`${window.location.origin}/linkedin`}
            >
                <img
                    src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/signin-button.png"
                    alt="Log in with Linked In"
                    style={{maxWidth: "180px"}}
                />
            </LinkedIn>
            {/* {!code && <div>No code</div>}
                    {code && <div>Code: {code}</div>}
                    {errorMessage && <div>{errorMessage}</div>} */}
        </>
    }
}

export default LinkedInSignIn;
