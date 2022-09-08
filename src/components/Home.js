import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="flex">
                    <div className="w-2/4 h-screen">
                        <img src="https://html-theme-uniel.vercel.app/img/social.svg" className="w-5/6 h-full ml-10" />
                    </div>
                    <div className="w-2/4 h-screen">
                        <h1 className="text-7xl font-bold mt-16 text-gray-700">We Design & Build Creative Brands</h1>
                        <p className="text-2xl text-gray-700 mt-5">Duis aute irure dolor reprehenderit <br/> voluptate velit esse dolore nulla pariatur</p>
                        <button className="text-white font-bold bg-red-600 hover:bg-red-700 mt-6 w-48 h-14">LEARN MORE</button>
                    </div>
                </div>
            </>
        )
    }
}