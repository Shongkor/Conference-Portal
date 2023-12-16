import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Service from './Service';
import './Service.css'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Services = () => {
    const [filteredPaper, setFilteredPaper] = useState([]);
    const { loggedUser } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/submit/get-paper-by-email?email=${loggedUser.email}`)
            .then(res => res.json())
            .then(data => setFilteredPaper([data?.data]))
    }, [loggedUser?.email])
    return (

        <div className='container'>
            <div className="serviceBG py-5">
                <div className="container">
                    <h1 className="text-center my-5">History</h1>
                    <div className="row gap-3">
                        {
                            filteredPaper[0]?.map(sr => <Service service={sr}></Service>)
                        }
                    </div>
                </div>
            </div>
            {console.log("lollllllllllll",filteredPaper)}
        </div>

    );
};

export default Services;