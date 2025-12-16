import React, { useState } from 'react';
import bgImage from "../assets/images/bgImage.webp"
import { Link } from 'react-router-dom';
const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        // Form is valid, you can send data to the server here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center w-full  h-screen "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="bg-white p-8 rounded-[20px] shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6 text-[#8d82c6]">Create an Account</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div>

                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Full name"
                            required
                        />
                    </div>

                    <div>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div>

                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div className='flex items-center justify-center w-full'>       <button
                        type="submit"
                        className="w-[300px] bg-[#b7b0dc] text-white py-2 rounded-[20px] hover:bg-purple-600 transition-colors duration-300 font-semibold cursor-pointer"
                      
                    >
                        Sign Up
                    </button></div>

                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/" className="text-indigo-600 hover:text-indigo-700">
                        Login here
                    </Link>

                </p>
            </div>
        </div>
    );
}

export default SignUpForm;
