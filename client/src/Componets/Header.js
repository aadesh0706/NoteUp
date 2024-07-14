import React from "react";
import { Link } from "react-router-dom";
import pic from "../Componets/favicon.ico";
import "../style.css";


function Header() {
    return (
        <React.Fragment>
            {/* <h1 className="head">Create Note</h1> */}
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={pic}/>
                        <span class="ml-3 text-xl">NoteUp</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={"https://github.com/aadesh0706"}><a class="mr-5 hover:text-gray-900">Github</a></Link>
                        <Link to={"https://in.linkedin.com/in/aadesh-gulumbe-b965b0246"}><a class="mr-5 hover:text-gray-900">LinkedIn</a></Link>
                        <Link to={"https://www.youtube.com/@marathicodingzone"}><a class="mr-5 hover:text-gray-900">Youtube</a></Link>
                        
                    </nav>
                    
                </div>
                
            </header>
        </React.Fragment>
    );
}

export default Header;