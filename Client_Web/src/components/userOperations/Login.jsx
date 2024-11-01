import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import { useNavigate } from 'react-router-dom';

const Login = ({ openFALogin, openRegister }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logined = (event) => {
        event.preventDefault();
        
        const newUser = {
            email: email,
            password: password
        };

        dispatch(login(newUser));
    };

    useEffect(() => {
        localStorage.clear();
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            const role = user.user.role;
            if(role === "67227974d6d3c54d653c3824"){
                navigate('/admin');
            } else if(role === "67227a6ed6d3c54d653c3830"){
                navigate('/teacher');
            } else if(role === "67227987d6d3c54d653c3826"){
                navigate('/student');
            } else{
                console.log("Internal error.");
            }
        }
    }, [user]);

    if (loading) return <p className="text-gray-700 font-bold">Loading...</p>;
    if (error) return <p className="text-gray-700 font-bold">Error: {error}</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={logined}>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
    
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" placeholder="Enter Password" className="w-full px-3 py-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
    
                <div className="mb-4 flex items-center justify-between">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-gray-700">Remember Me</span>
                    </label>
                    <a href="#" className="text-primary hover:text-secondary">Forgot Password?</a>
                </div>
    
                <div className="mb-4">
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-2">Login</button>
                </div>
            </form>

            <div className="text-center">
                <button className="text-primary hover:text-secondary" onClick={openFALogin}>2FA Login</button>
            </div>
    
            <div className="text-center">
                <span className="text-gray-700">Don't have an account?</span>
                <button className="text-primary hover:text-secondary" onClick={openRegister}>Sign Up</button>
            </div>
        </div>
    );
};

export default Login;