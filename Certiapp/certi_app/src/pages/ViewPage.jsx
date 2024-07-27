import React from 'react'
import img1 from '../assets/images/photo.jpg'

const ViewPage = () => {
    return (
        <>
            <div className="border border-grey-400 border-4 mx-44 my-24  py-16 rounded-lg">
                <h3 className="text-center font-serif text-2xl font-bold">Kerala Blockchain Academy</h3>
                <img src={img1} className="size-60 mx-auto mt-12 mb-10" />
                <p className="font-serif text-xl text-center">This is to certify that</p>
                <p className="font-serif text-xl text-center">has successfully completed</p>
                <p className="font-serif text-xl text-center">with on</p>
            </div>
        </>
    )
}

export default ViewPage