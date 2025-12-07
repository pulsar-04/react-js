import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as carService from '../../services/carService';
import { useForm } from "../../hooks/useForm";

export default function Edit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        brand: '',
        model: '',
        imageUrl: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    const editCarSubmitHandler = async (values) => {
        try {
            await carService.update(carId, values);
            navigate('/catalog/' + carId); 
        } catch (err) {
            console.log(err);
        }
    };
    
    
    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        editCarSubmitHandler(car);
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Car</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" value={car.brand} onChange={onChange} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" value={car.model} onChange={onChange} />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={car.imageUrl} onChange={onChange} />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={car.price} onChange={onChange} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={car.description} onChange={onChange}></textarea>

                    <input type="submit" className="btn submit" value="Edit Car" />
                </div>
            </form>
        </section>
    );
}