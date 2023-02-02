import { useEffect, useState } from "react"
import axios from "axios";

function Register() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

 function demo()
 {
  axios.post('http://localhost/admin-panel/register.php',{
    name:name,
    email:email,
    password:password

  })
  .then(function (response) {
    // handle success
    // console.log(response);
    setname(response)
    setemail(response)
    setpassword(response)
    // console.log(name)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

 }
  return (
    <>
      <div className="hold-transition register-page">

        <div className="register-box">
          <div className="register-logo">
            <a href="#"><b>Admin</b>LTE</a>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form  method="post">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Full name" name='name' onChange={(i) => setname(i.target.value)} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" name='email' onChange={(i) => setemail(i.target.value)} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" name='password' onChange={(i) => setpassword(i.target.value)} />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <a href="/admin">
                    <button type="button" onClick={demo} className="btn btn-primary btn-block">Register</button>
                    </a>
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" />
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" />
                  Sign up using Google+
                </a>
              </div>
              <a href="login.html" className="text-center">I already have a membership</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Register