import axios from "axios";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

function Home() {
    const navigate = useNavigate();
    const { register , formState:{errors} , handleSubmit } = useForm();
    const [message , setMessage] = useState('');

    

    const onSubmit=(data)=>{
        console.log(data);
        // console.log()
        const res = axios.post("http://localhost:7000/notesubmit",data)
        .then(response=>{setMessage(response.data);
        });

        if (!message) {
            setMessage(res.data);
            setTimeout(() => {
                navigate("/noteshow");
            }, 2000);
        } else{
            setMessage("Some Error Occured");
        }
    }



    return (
        <React.Fragment>
            {/* <h1 className="head">NoteUp</h1> */}
            <section className="text-gray-600 body-font">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">NoteUp - Let's Add Some Note</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Let's add some flair to your thoughts and stay organized effortlessly!</p>
                        </div>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className="relative flex-grow w-full">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Note Name</label>
                                <input type="text" {...register("name")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative flex-grow w-full">
                                <label for="email" class="leading-7 text-sm text-gray-600">Description</label>
                                <input type="description" {...register("description")} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            
                            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            <p className="text-success">{message}</p>

                        </div>
                    </div>
                </form>
            </section>

            {/* table list to notes show up */}
            <table className="table table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>Note Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hello</td>
                        <td>I dont know</td>
                        <td>2024-02-04</td>
                        <td>
                            <Link to="/delete" className="btn btn-danger">Delete</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default Home;