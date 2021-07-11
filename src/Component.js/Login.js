import React from 'react'

class Login extends React.Component{

    render() {
        return (
             <div class="row">
                 <div class="col-md-8 offset-md-2">
                 <form>
                     <div class="form-group">
                         <h1>LogIn</h1>
                         <label class="skills" for="Subject">UserName</label>
                         <input type="text" id="username" class="form-control" required></input>
                     </div>
                     <div>
                     <label class="skills" for="Body">Password</label>
                         <input type="password" id="pwd" class="form-control" required></input>  
                     </div>
                     <input type="submit" value="Login" id="navigation" class="btn btn-primary"></input>  
                 </form>
                 </div>
             </div>
        );
    }
}
export default Login;