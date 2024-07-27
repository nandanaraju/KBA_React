import React from 'react'

const Education = () => {
    return (
        <div id="Education" className="py-44 bg-cyan-300 ">
            <h2 className="font-serif text-center text-4xl mt-4 mb-4 ">Education Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-1 my-6 ml-4">

                <div className="mt-2 inline-block bg-white  rounded-lg px-2 py-2 mr-3.5 shadow-lg shadow-white	">
                    <h2 className="text-center font-bold text-red-700 text-2xl font-serif p-3">SSLC</h2>
                    <p className="mr-8 text-center  text-red-500 font-serif text-lg font-bold">GVHSS KOTTANKULANGARA</p>
                    <p className="mr-8 text-center  text-red-500 font-serif text-lg font-bold">Year : 2018</p>
                </div>
                <div className="mt-2 inline-block bg-white  rounded-lg px-2 py-2 mr-3.5 shadow-lg shadow-white	">
                    <h2 className="text-center font-bold text-red-700 text-2xl font-serif p-3">PLUS TWO</h2>
                    <p className="mr-8 text-center text-red-500 font-serif text-lg font-bold">GHSS CHAVARA</p>
                    <p className="mr-8 text-center text-red-500 font-serif text-lg font-bold">Year : 2018-2020</p>
                </div>
                <div className="mt-2 inline-block bg-white  rounded-lg px-2 py-2 mr-3.5 shadow-lg shadow-white	">
                    <h2 className="text-center font-bold text-red-700 text-2xl font-serif p-3 ">GRADUATION</h2>
                    <p className=" mr-8 text-center  text-red-500 font-serif text-lg font-bold">
                        BABY JOHN MEMORIAL GOVERNMENT COLLEGE CHAVARA
                    </p>
                    <p className="mr-8 text-center text-red-500 font-serif text-lg font-bold">Year : 2020-2023</p>
                </div>
            </div>
        </div>
    )
}

export default Education