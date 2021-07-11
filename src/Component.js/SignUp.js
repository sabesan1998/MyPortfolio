import React from 'react'

class SignUp extends React.Component{
    render(){
        return(
         <div>
              <form class="was-validated container container-sm border">
              <div class="form-group">
                         <h1>SignUP</h1>
                         <label class="skills" for="Subject">Name</label>
                         <input type="text" id="username" class="form-control" required></input>
                     </div>
                     <div>
                     <label class="skills" for="Body">PhoneNumber</label>
                         <input type="password" id="pwd" class="form-control" required></input>  
                     </div>
                     <div>
                     <label class="skills" for="Body">Address</label>
                         <input type="password" id="pwd" class="form-control" required></input>  
                     </div>
                     <div>
                     <label class="skills" for="Body">Password</label>
                         <input type="password" id="pwd" class="form-control" required></input>  
                     </div>
                     <label class="form-check label">
                         <input class="form-check-input" type="checkbox" name="remember" required> 
                        </input>
                        I agree the Terms and Condition.
                     </label>
                     <input type="submit" value="Login" id="navigation" class="btn btn-primary"></input>  
              </form>
             </div>
        );
    }
}
export default SignUp;