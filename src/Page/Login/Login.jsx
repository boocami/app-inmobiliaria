// import logo from './logo.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Label from '../../Component/Label';
import Input from '../../Component/Input';
import A from '../../Component/A';
import { authenticateUser } from "../../Service/index";
import UserProfile from '../../Model/User';

function Login(props) {

  let navigate = useNavigate();
    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        email: "",
        password: "",
      };

      const [user, setUser] = useState(initialState);

      const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
      const dispatch = useDispatch();

      const validateUser = () => {
        dispatch(authenticateUser(user.email, user.password))
          .then((response) => {
            var username = response.data.username;
            var perfil = response.data.roles[0];
            UserProfile.setName(username);
            UserProfile.setRoles(perfil);
            console.log("Logeado Correctamente");
            return navigate('inicio');
          })
          .catch((error) => {
            console.log(error.message);
            setShow(true);
            resetLoginForm();
            setError("Invalid email and password");
          });
      };
    
      const resetLoginForm = () => {
        setUser(initialState);
      };
    
      
  return (
    // <!-- Container -->
    <div className="flex flex-col h-screen bg-gray-100">
        {/* <!-- Auth Card Container --> */}
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            {/* <!-- Auth Card --> */}
            <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg">
    
                {/* <!-- Card Title --> */}
                <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                    Login
                </h2>
    
                <form className="mt-10" method="POST">
                    {/* <!-- Email Input --> */}
                    <Label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase" text="E-mail"/>
                    <Input id="email" type="text" name="email" placeholder="e-mail address" autoComplete="email"
                        value={user.email}
                        className="block w-full py-3 px-1 mt-2 
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200" required  onChange={credentialChange}/>
    
                    {/* <!-- Password Input --> */}
                    <Label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase" text="Password"/>
                    <Input id="password" type="password" name="password" placeholder="password" autoComplete="current-password"
                        className="block w-full py-3 px-1 mt-2 mb-4
                        text-gray-800 appearance-none 
                        border-b-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required  onChange={credentialChange}
                        value={user.password}/>
{/*     
                    <!-- Auth Buttton --> */}                    
                    <button
                    type="button"
                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                    onClick={validateUser}
                    >Login</button>
                        
    
                    {/* <!-- Another Auth Routes --> */}
                    <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                        <A href="forgot-password" className="flex-2 underline" text="Forgot password?"/>
                            
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;