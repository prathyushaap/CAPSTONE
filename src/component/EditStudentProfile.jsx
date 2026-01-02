import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import bgImage from "../assets/images/bgImage.webp";

const EditProfileForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        regNumber: ''
    });

    const [error, setError] = useState('');

    useEffect(() => {
        // Load existing user data from localStorage
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            try {
                const parsed = JSON.parse(storedData);
                setFormData((prev) => ({
                    ...prev,
                    fullName: parsed.fullName || prev.fullName,
                    email: parsed.email || prev.email,
                    phone: parsed.phone || prev.phone,
                    regNumber: parsed.regNumber || prev.regNumber,
                }));
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.password) {
            setError('Password is required');
            return;
        }
        setError('');
        
        // Save updated user data to localStorage
        const updatedUserData = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            regNumber: formData.regNumber,
        };
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
        
        console.log('Form submitted:', formData);
        
        // Redirect back to profile page
        navigate("/profile");
    };

    return (
        <div
            className="flex px-5 items-center justify-center w-full min-h-screen py-8 sm:py-10 relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
                <FiArrowLeft className="text-[#a49bd5] text-lg sm:text-xl" />
            </button>

            <div className="bg-white mt-10 p-6 sm:p-8 rounded-[20px] shadow-lg w-full max-w-md relative">
                <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-[#8d82c6]">
                    Edit Profile
                </h2>

                {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 text-sm sm:text-base mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:py-3 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec] text-sm sm:text-base"
                            placeholder="Full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm sm:text-base mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:py-3 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec] text-sm sm:text-base"
                            placeholder="Email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 text-sm sm:text-base mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:py-3 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec] text-sm sm:text-base"
                            placeholder="Password"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-700 text-sm sm:text-base mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:py-3 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec] text-sm sm:text-base"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    {/* Registration Number */}
                    <div>
                        <label className="block text-gray-700 text-sm sm:text-base mb-1">Registration Number</label>
                        <input
                            type="text"
                            name="regNumber"
                            value={formData.regNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 sm:py-3 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec] text-sm sm:text-base"
                            placeholder="Registration Number"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center w-full">
                        <button
                            type="submit"
                            className="w-full sm:w-[300px] bg-[#b7b0dc] text-white py-2 sm:py-3 rounded-[20px] hover:bg-purple-600 transition-colors duration-300 font-semibold text-sm sm:text-base cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfileForm;
