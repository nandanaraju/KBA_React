import React from 'react'
import img1 from '../assets/images/wp.png'
import img2 from '../assets/images/insta.png'
import img3 from '../assets/images/mail.png'
import img4 from '../assets/images/link.png'


const Contact = () => {
    return (
        <div id="contact" className="py-44 bg-cyan-300">
                <h2 className="font-serif text-center text-4xl mt-4 mb-4 ">Contact Me</h2>
                <table className="mx-auto">
                    <tr>
                        <td><img src={img1} /></td>
                        <td>9539251394</td>
                    </tr>
                    <tr>
                        <td><img src={img2} /></td>
                        <td>https://www.instagram.com/__.nan__dana._?igsh=bmNyd2VjN2s3ZXRi</td>
                    </tr>
                    <tr>
                        <td><img src={img3} /></td>
                        <td>nandanav0074@gmail.com</td>
                    </tr>
                    <tr>
                        <td><img src={img4} /></td>
                        <td>https://www.linkedin.com/in/nandana-v-795514288</td>
                    </tr>

                </table>
            </div>
    )
}

export default Contact