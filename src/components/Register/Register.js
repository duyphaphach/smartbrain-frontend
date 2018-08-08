<<<<<<< HEAD
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
=======
import React, {Component} from 'react';

class Register extends Component {
  render(){
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <form>
              <p class="h4 text-center py-4">Sign up</p>
              <div class="md-form">
                <i class="fa fa-user prefix grey-text"></i>
                <input type="text" id="materialFormCardNameEx" class="form-control" />
                <label for="materialFormCardNameEx" class="font-weight-light">Your name</label>
              </div>

              <div class="md-form">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" id="materialFormCardEmailEx" class="form-control" />
                <label for="materialFormCardEmailEx" class="font-weight-light">Your email</label>
              </div>

              <div class="md-form">
                <i class="fa fa-exclamation-triangle prefix grey-text"></i>
                <input type="email" id="materialFormCardConfirmEx" class="form-control" />
                <label for="materialFormCardConfirmEx" class="font-weight-light">Confirm your email</label>
              </div>

              <div class="md-form">
                <i class="fa fa-lock prefix grey-text"></i>
                <input type="password" id="materialFormCardPasswordEx" class="form-control" />
                  <label for="materialFormCardPasswordEx" class="font-weight-light">Your password</label>
              </div>

              <div class="text-center py-4 mt-3">
                <button class="btn btn-cyan" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  };
}

export default Register;
>>>>>>> ChangeSeStateDemo
