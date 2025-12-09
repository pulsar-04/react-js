import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService';
import * as likeService from '../../services/likeService';
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            })
            .catch(err => console.log(err));

        
        likeService.getCarLikes(carId)
            .then(likesData => {
                
                
                
                setLikes(likesData.length);

                
                const isLikedByUser = likesData.some(like => like._ownerId === userId);
                setHasLiked(isLikedByUser);
            })
            .catch(err => console.log(err));

    }, [carId, userId]);

    const isOwner = userId === car._ownerId;

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.brand} ${car.model}?`);

        if (hasConfirmed) {
            await carService.remove(carId);
            navigate('/catalog');
        }
    }

    const likeButtonClickHandler = async () => {
        try {
            await likeService.likeCar(carId);
            
            
            setLikes(state => state + 1);
            setHasLiked(true);
        } catch (error) {
            console.log("Like error:", error);
        }
    }

    return (
        <section id="details-page">
            <div className="wrapper">
                {car.imageUrl ? (
                    <>
                        <div className="car-img">
                            <img src={car.imageUrl} alt={car.brand} />
                        </div>
                        <div className="car-info">
                            <div className="car-text">
                                <h1>{car.brand} {car.model}</h1>
                                <h3>${car.price}</h3>
                                <p>{car.description}</p>
                            </div>

                            <div className="buttons">
                                {isOwner && (
                                    <>
                                        <Link to={`/edit/${car._id}`} className="btn-edit">Edit</Link>
                                        <button className="btn-delete" onClick={deleteButtonClickHandler}>Delete</button>
                                    </>
                                )}

                                {isAuthenticated && !isOwner && !hasLiked && (
                                    <button className="btn-like" onClick={likeButtonClickHandler}>Like</button>
                                )}

                                <div className="likes">
                                    <span id="total-likes">Likes: {likes}</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}