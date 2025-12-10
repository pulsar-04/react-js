import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from '../../contexts/AuthContext';

export default function Profile() {
    const { userId, email } = useContext(AuthContext);
    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        carService.getMyCars(userId)
            .then(result => {
                setMyCars(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [userId]);

    return (
        <section id="profile-page">
            
            <div className="profile-header">
                <div className="profile-info">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Icon" className="profile-avatar" />
                    <div className="profile-text">
                        <h1>My Profile</h1>
                        <p>User Email: <strong>{email}</strong></p>
                        <p>Active Offers: <strong>{myCars.length}</strong></p>
                    </div>
                </div>
            </div>

            
            <div className="profile-cars">
                <h2 style={{textAlign: 'center', color: '#2c3e50', margin: '30px 0'}}>My Garage</h2>

                {myCars.length > 0 ? (
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
                        {myCars.map(car => (
                            <div className="allCars-info" key={car._id}>
                                <img src={car.imageUrl} alt={car.brand} />
                                <h6>{car.brand} {car.model}</h6>
                                <h2>Price: ${car.price}</h2>
                                <Link to={`/catalog/${car._id}`} className="details-button">Details</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-cars-container">
                        <h3 className="no-articles">You haven't posted any cars yet.</h3>
                        <Link to="/create" className="btn submit" style={{maxWidth: '200px', margin: '20px auto', display: 'block'}}>
                            Create Offer
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}