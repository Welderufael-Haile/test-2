import React from 'react';
import { FaUsers, FaHistory, FaLightbulb, FaPhone } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="font-sans p-5 text-center">
            <h1 className="text-4xl mb-5 text-white">About <strong className='text-yellow-400'>Us</strong></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 text-white">
                <div className=" p-5 rounded-lg  shadow-md text-center" style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
                    <FaUsers className="text-2xl text-blue-500  mb-2" />
                    <h2 className="text-xl font-semibold">Our Team</h2>
                    <p>We are a group of passionate individuals dedicated to delivering the best solutions for our clients.</p>
                </div>
                <div className=" p-5 rounded-lg shadow-md text-center" style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
                    <FaHistory className="text-2xl text-blue-500 mb-2" />
                    <h2 className="text-xl font-semibold">Our History</h2>
                    <p>Founded in 2010, we have over a decade of experience in providing quality services worldwide.</p>
                </div>
                <div className=" p-5 rounded-lg shadow-md text-center "style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
                    <FaLightbulb className="text-2xl text-blue-500 mb-2" />
                    <h2 className="text-xl font-semibold">Our Vision</h2>
                    <p>We aim to innovate and inspire, creating a better future with cutting-edge technology.</p>
                </div>
                <div className=" p-5 rounded-lg shadow-md text-center" style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
                    <FaPhone className="text-2xl text-blue-500 mb-2" />
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p>Feel free to reach out to us for any inquiries or collaborations. We are here to help!</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    sections: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    section: {
        background: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    icon: {
        fontSize: '2rem',
        color: '#007BFF',
        marginBottom: '10px',
    },
};

export default AboutUs;