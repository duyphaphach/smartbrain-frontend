import React from 'react';


class Register extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card" style={{'background-color': 'transparent', 'margin' : '100px 0px'}}>
            <div className="card-body" st>
              <form action="">
                <p className="h4 mb-4">Register</p>

                <input type="text" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="Name" required />

                <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="E-mail" required />

                <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="Comfirm Email" required />

                <input type="password" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="Password" required />

                <button className="btn btn-unique btn-block waves-effect" type="submit">Register</button>
                <button className="btn btn-sm btn-outline-warning waves-effect">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
