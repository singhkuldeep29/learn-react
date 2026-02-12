import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           JavaScript is a high-level, interpreted programming language mainly used to 
                           create interactive and dynamic content on websites. It runs in web 
                           browsers and allows developers to add features like animations, form validation, 
                           pop-ups, and real-time updates.

                        </p>
                        <p className="mt-4 text-gray-600">
                            JavaScript is one of the core web technologies, along with HTML (structure) and CSS (style). 
                            It can also be used on the server side using environments like Node.js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}