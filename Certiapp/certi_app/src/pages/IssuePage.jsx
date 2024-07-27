import React from 'react'
import { Link } from 'react-router-dom'

const IssuePage = () => {
    return (
        <>
        <form>
        <div className="flex justify-end">


            <Link to="/" className="b"><input type="button" name="Issue" value="Home" className="font-serif mr-2 h-10"/></Link>
            <Link to="/issue" className="b"><input type="button" name="home" value="Issue Certificate"
                    className=" rounded-md text-white mr-4 bg-blue-500 border-none font-serif h-10"/></Link>

        </div>
        <h2 className=" text-2xl text-left font-bold font-serif">Certificate Dapp</h2>

        <div className=" ml-10 mt-12 mr-10  max-w-lg ">

            <h2 className="text-2xl font-bold font-serif">Issue New Certificate</h2>
            <div className="flex flex-col">
                <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
                    for="select">Select
                    Course*</label>
                <select name="course" className="border-2 border-black h-10">
                    <option value="cba">Certified Blockchain Associate</option>
                    <option value="CED">Certified Ethereum Developer</option>
                    <option value="CHF">Certified Hyperledger Fabric Developer</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
                    for="select">Certificate
                    Id*</label>
                <input type="text" name="txtName" placeholder="Certificate ID" className="border-2 border-black h-10"/>
            </div>
            <div className="flex flex-col">
                <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
                    for="select">Candidate
                    Name*</label>
                <input type="text" name="txtName" placeholder="Candidate Name" className="border-2 border-black h-10"/>
            </div>
            <div className="flex flex-col">
                <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
                    for="select">Select
                    Grade*</label>
                <select name="grade" className="border-2 border-black h-10">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif" for="select">Issue
                    Date*</label>
                <input type="date" id="issue date" className="border-2 border-black h-10"/>
            </div>
            <div>
                <Link to="/view"><input type="button" name="submit" value="Submit"
                        className="bg-blue-500 hover:bg-blue-700 outline-none text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline mb-5"/></Link>
            </div>



        </div>

    </form>
        </>
    )
}

export default IssuePage