import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as carService from '../../services/carService';

export default function Home() {
    const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                
                setLatestCars(result.reverse().slice(0, 3));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section id="home-page">
            <div className="hero">
                <div className="hero-content">
                    <h2>Buy & Sell the Best Cars</h2>
                    <p>Find the car of your dreams or sell yours instantly.</p>
                    <Link to="/catalog" className="btn submit" style={{maxWidth: '200px', margin: '0 auto'}}>Check Catalog</Link>
                </div>
            </div>

            <div className="latest-cars">
                <h2 style={{textAlign: 'center', fontSize: '2rem', color: '#2c3e50', marginBottom: '30px'}}>Latest Additions</h2>
                
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
                    {latestCars.length > 0 ? (
                        latestCars.map(car => (
                            <div className="allCars-info" key={car._id}>
                                <img src={car.imageUrl} alt={car.brand} />
                                <h6>{car.brand} {car.model}</h6>
                                <h2>Price: ${car.price}</h2>
                                <Link to={`/catalog/${car._id}`} className="details-button">Details</Link>
                            </div>
                        ))
                    ) : (
                        <p className="no-articles">No cars added yet</p>
                    )}
                </div>
            </div>
        </section>
    );
}