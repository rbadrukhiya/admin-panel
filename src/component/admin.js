import { useState } from "react"
import axios from "axios";

function Admin() {
    const [email , setemail] = useState();
    const [password , setpassword] = useState();
    function demo()
    {
        axios.post('http://localhost/admin-panel/login.php',
        {
            email:email,
            password:password
        })
  .then(function (response) {
    // handle success
    console.log(response);
    setemail(response)
    setpassword(response)
    if(email == '')
    {
        alert('enter email')
    }
    else if(password == '')
    {
        alert('enter password')
    }
    else
    {
        if(email == response.data.email && password == response.data.password)
        {
            window.location.href='/dashboard'
            setemail('')
            setpassword('')
            window.localStorage.setItem("uid" , response.data.id )
        }
        else
        {
            alert('check your email or password')
            window.location.reload()
        }
      
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }
    return (
        <>
            {/* <h1>admin</h1> */}
            <center className="admin">
                <div class="login-box">
                    <div class="login-logo">
                        <a href="#"><b>Admin</b>LTE</a>
                    </div>
                    <div class="card ">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">Sign in to start your session</p>

                            <form method="post">
                                <div class="input-group mb-3">  
                                    <input type="email" class="form-control" placeholder="Email" onChange={(i)=> setemail(i.target.value)}></input>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Password" onChange={(i) => setpassword(i.target.value)}></input>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                            <input type="checkbox" id="remember"></input>
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        {/* <a href="/dashboard"> */}
                                        <button type="button" onClick={demo} class="btn btn-primary btn-block  ">Sign In</button>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </form>

                            <div class="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" class="btn btn-block btn-primary">
                                    <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                                </a>
                                <a href="#" class="btn btn-block btn-danger">
                                    <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                                </a>
                            </div>

                            <p class="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p class="mb-0">
                                {/* <a href="/register" class="text-center">Register a new membership</a> */}
                            </p>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Admin