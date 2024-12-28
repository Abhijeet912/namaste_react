import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                We'd love to hear from you! Please fill out the form below and we'll get back to you shortly.
            </p>
            <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                        Message:
                    </label>
                    <textarea
                        className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-green-800"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="bg-green-100 hover:bg-green-200 text-green-600 font-bold py-3 px-6 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact
