
import bgImage from "../assets/images/bgImage.webp"

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()

    const move = () => {
        navigate("/home")
    }
    return (
        <div className="flex items-center justify-center w-full  h-screen "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="bg-white shadow-lg rounded-[30px] p-8 w-full max-w-md flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#a49bd5]">Welcome Back</h2>

                <form className="space-y-4">
                    {/* Email/Username */}
                    <div>

                        <input
                            type="email"
                            id="email"
                            className="w-full border border-[#aaa2d0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                            placeholder=" Email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>

                        <input
                            type="password"
                            id="password"
                            className="w-full border border-[#aaa2d0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[300px] bg-[#b7b0dc] text-white py-2 rounded-[20px] hover:bg-purple-600 transition-colors duration-300 font-semibold cursor-pointer"
                        onClick={move}
                    >
                        Login
                    </button>
                </form>

                {/* Optional: Links */}
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <a href="#" className="hover:text-purple-500">Forgot Password?</a>
                    <Link to="/signup" className="hover:text-purple-500">Sign Up</Link>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
