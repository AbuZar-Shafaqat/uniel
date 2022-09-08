import React, { Component } from "react";

export default class Projects extends Component {
    render() {
        return (
            <>
                <div className="h-screen w-full bg-red-500 flex justify-center items-center">
                    <div className="h-3/4 w-5/12">
                        <img src="https://source.unsplash.com/Id5Lt7-sydQ/600x600" className="w-full h-full" />
                    </div>
                    <div className="h-3/4 w-5/12 text-white">
                        <h1 className="font-semibold ml-20 mt-10">FEATURED PROJECT</h1>
                        <h2 className="font-bold text-5xl ml-20 mt-5">Coloca Branding</h2>
                        <p className="ml-20 mt-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <div className="w-7 h-0.5 bg-white ml-20 mt-5"></div>
                        <button className="uppercase ml-20 mt-5">live site <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </>
        )
    }
}


