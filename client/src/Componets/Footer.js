import React from "react";
import { Link } from "react-router-dom";
import pic from "../Componets/favicon.ico";


function Footer() {
    return (
        <React.Fragment>
            {/* <h1>This is Footer</h1> */}
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src={pic}/>
                        <span className="ml-3 text-xl">NoteUp</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 NoteUp —
                        <a href="https://aadesh0706.github.io/portfolio/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@aadeshgulumbe</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link to={"https://www.instagram.com/aadeshgulumbe/"}><a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a></Link><span className="ml-3 text-xl">   </span>
                        <Link to={"https://in.linkedin.com/in/aadesh-gulumbe-b965b0246"}><a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a></Link>
                    </span>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;