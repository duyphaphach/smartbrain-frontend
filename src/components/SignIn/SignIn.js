import React from 'react';

<<<<<<< HEAD

class SignIn extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card" style={{'background-color': 'transparent', 'margin' : '100px 0px'}}>
            <div className="card-body" st>
              <form action="">
                <p className="h4 mb-4">Login</p>
                <input type="email" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="E-mail" required />
                <input type="password" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="Password" required />
                <button className="btn btn-unique btn-block waves-effect" type="submit">Login</button>
                <button className="btn btn-sm btn-outline-warning waves-effect">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
=======
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          console.log('success');
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <button
                onClick={this.onSubmitSignIn}
                className="btn btn-primary"
                type="submit"
              >Sign In</button>
            </div>
            <div className="lh-copy mt3">
              <button  onClick={() => onRouteChange('register')} className="btn btn-unique">Register</button>
            </div>
          </div>
        </main>
      </article>
>>>>>>> ChangeSeStateDemo
    );
  }
}

export default Signin;
