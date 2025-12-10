import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as carService from '../../services/carService';
import * as likeService from '../../services/likeService';

export default function TopRated() {
    const [topCars, setTopCars] = useState([]);

    useEffect(() => {
        
        Promise.all([
            carService.getAll(),
            likeService.getAllLikes()
        ])
        .then(([carsData, likesData]) => {
            
            
            const carsWithLikes = carsData.map(car => {
                
                const carLikesCount = likesData.filter(like => like.carId === car._id).length;
                
                
                return { ...car, likesCount: carLikesCount };
            });

            
            const sortedCars = carsWithLikes.sort((a, b) => b.likesCount - a.likesCount);

            
            setTopCars(sortedCars.slice(0, 10));
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section id="top-rated-page" style={{textAlign: 'center'}}>
            <h1 style={{color: '#2c3e50', marginBottom: '10px'}}>Top Rated Cars</h1>
            <p style={{marginBottom: '40px', color: '#7f8c8d'}}>The community favorites</p>

            {topCars.length > 0 ? (
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
                    {topCars.map((car, index) => (
                        <div className="allCars-info" key={car._id} style={{position: 'relative'}}>
                            
                            <div className={`rank-badge rank-${index + 1}`}>
                                #{index + 1}
                            </div>

                            <img src={car.imageUrl} alt={car.brand} />
                            <h6>{car.brand} {car.model}</h6>
                            <h2>Likes: {car.likesCount} <span style={{fontSize: '0.8rem', color: '#777'}}>❤️</span></h2>
                            <Link to={`/catalog/${car._id}`} className="details-button">Details</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="no-articles">No likes yet. Be the first to like a car!</h3>
            )}
        </section>
    );
}