import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../redux/authSlice";

const Register = ({ openLogin }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            role: "67227987d6d3c54d653c3826",
            name: name,
            email: email,
            password: password
        };

        dispatch(register(newUser));
        alert('You can log in');
    };

    if (loading) return <p className="text-gray-700 font-bold">Loading...</p>;
    if (error) return <p className="text-gray-700 font-bold">Error: {error}</p>;

    return (
      <div>
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input type="text" placeholder="Enter Name" className="w-full px-3 py-2 border" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
  
              <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
  
              <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input type="password" placeholder="Enter Password" className="w-full px-3 py-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
  
              <div className="mb-4">
                  <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-2">Sign Up</button>
              </div>
          </form>
  
          <div className="text-center">
              <span className="text-gray-700">Already have an account?</span>
              <button className="text-primary hover:text-secondary" onClick={openLogin}>Login</button>
          </div>
      </div>
    )
  }
  
  export default Register