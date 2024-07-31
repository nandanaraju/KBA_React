import React, { useEffect, useState } from 'react'
import img1 from '../assets/images/photo.jpg'
import { useParams } from 'react-router-dom'



const ViewPage = () => {

    const { id } = useParams()
    console.log(id)
    const [certificates, setCertificates] = useState({})

    useEffect(() => {
        const certificate = async () => {
            const res = await fetch(`http://localhost:5000/view/${id}`)
            if (!res.ok) return ("Error")
            const data = await res.json()
            //console.log(data);
            setCertificates(data)

        }; certificate();
    }, [])

    return (
        <>
            <div className="border border-grey-400 border-4 mx-44 my-24  py-16 rounded-lg">
                <h3 className="text-center font-serif text-2xl font-bold">Kerala Blockchain Academy</h3>
                <img src={img1} className="size-60 mx-auto mt-12 mb-10" />
                <p className="font-serif text-xl text-center">{`This is to certify that ${certificates.candidatename}`}</p>
                <p className="font-serif text-xl text-center">{`has successfully completed ${certificates.coursename}`}</p>
                <p className="font-serif text-xl text-center">{`with on ${certificates.date}`}</p>
            </div>
        </>
    )
}

export default ViewPage