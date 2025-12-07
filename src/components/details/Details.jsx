import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService';
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const navigate = useNavigate(); 
    const { carId } = useParams();
    const { userId } = useContext(AuthContext);
    const [car, setCar] = useState({});

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    const isOwner = userId === car._ownerId;

    
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.brand} ${car.model}?`);

        if (hasConfirmed) {
            await carService.remove(carId);
            navigate('/catalog'); 
        }
    }

    return (
        <section id="details-page">
            <div className="wrapper">
                <div className="car-img">
                    <img src={car.imageUrl} alt={car.brand} />
                </div>
                <div className="car-info">
                    <div className="car-text">
                        <h1>{car.brand} {car.model}</h1>
                        <h3>${car.price}</h3>
                        <p>{car.description}</p>
                    </div>

                    {isOwner && (
                        <div className="buttons">
                            <Link to={`/edit/${car._id}`} className="btn-edit">Edit</Link>
                            {/* onClick handler на бутона Delete */}
                            <button className="btn-delete" onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}