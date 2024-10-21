const Login = ({ openFALogin, openRegister }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
                </div>
    
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" placeholder="Enter Password" className="w-full px-3 py-2 border" />
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
                <span className="text-gray-700">Dont have an account?</span>
                <button className="text-primary hover:text-secondary" onClick={openRegister}>Sign Up</button>
            </div>
        </div>
    )
}
  
export default Login