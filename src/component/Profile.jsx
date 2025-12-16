import { FiEdit } from "react-icons/fi"; // Using react-icons for the edit icon
import bgImage from "../assets/images/bgImage.webp"; // Replace with your actual image path

const StudentCard = () => {
    return (
        <div
            className="flex items-center justify-center w-full min-h-screen py-10"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center justify-center w-full max-w-7xl px-4 md:px-6 lg:px-5 flex-wrap">
                <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-sm text-center">

                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4 4 0 0110 15h4a4 4 0 014.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        Jane Doe
                    </h2>

                    {/* Info */}
                    <div className="text-left space-y-2 text-gray-700">
                        <p><span className="font-semibold">Department:</span> Computer Science</p>
                        <p><span className="font-semibold">Year:</span> 3rd Year</p>
                        <p><span className="font-semibold">Registration No.:</span> 2021B12345</p>
                        <p><span className="font-semibold">Mobile No:</span> 9849785672</p>
                        <p><span className="font-semibold">Email:</span> abc@gmail.com</p>
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                        <div className="flex items-center justify-center w-full">
                            <button className="px-6 py-3 bg-linear-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full shadow-lg hover:opacity-90 flex items-center justify-center gap-2 transition cursor-pointer">
                                <FiEdit className="h-5 w-5" />
                                Edit Profile
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
