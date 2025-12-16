import React, { useState } from 'react';
import bgImage from "../assets/images/bgImage.webp";

const EditProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        regNumber: ''
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

        // Example password validation
        if (!formData.password) {
            setError('Password is required');
            return;
        }

        setError('');
        // Form is valid, send data to server here
        console.log('Form submitted:', formData);
    };

    return (
        <div
            className="flex items-center justify-center w-full h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-white p-8 rounded-[20px] shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6 text-[#8d82c6]">Edit Profile</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 mb-1">Full Name</label>
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

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
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

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
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

                    {/* Phone Number */}
                    <div>
                        <label className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    {/* Registration Number */}
                    <div>
                        <label className="block text-gray-700 mb-1">Registration Number</label>
                        <input
                            type="text"
                            id="regNumber"
                            name="regNumber"
                            value={formData.regNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
                            placeholder="Registration Number"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='flex items-center justify-center w-full'>
                        <button
                            type="submit"
                            className="w-[300px] bg-[#b7b0dc] text-white py-2 rounded-[20px] hover:bg-purple-600 transition-colors duration-300 font-semibold cursor-pointer"
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
