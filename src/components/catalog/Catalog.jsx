import { useEffect, useState } from "react";
import * as carService from '../../services/carService';
import { Link } from "react-router-dom";

export default function Catalog() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Cars</h1>

            {cars.length > 0 ? (
                cars.map(car => (
                    <div className="allCars-info" key={car._id}>
                        <img src={car.imageUrl} alt={car.brand} />
                        <h6>{car.brand} {car.model}</h6>
                        <h2>Price: ${car.price}</h2>
                        <Link to={`/catalog/${car._id}`} className="details-button">Details</Link>
                    </div>
                ))
            ) : (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}