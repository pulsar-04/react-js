import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from "../../contexts/AuthContext";

export default function Edit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const { userId } = useContext(AuthContext);
    const [error, setError] = useState(''); 
    
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
                
                if (result._ownerId !== userId) {
                    navigate('/catalog'); 
                }
                setCar(result);
            })
            .catch(err => {
                console.log(err);
                navigate('/catalog');
            });
    }, [carId, userId]);

    const editCarSubmitHandler = async (values) => {
        try {
            await carService.update(carId, values);
            navigate('/catalog/' + carId);
        } catch (err) {
            
            console.log(err);
            setError(err.message);
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

        

        
        
        if (car.brand === '' || car.model === '' || car.imageUrl === '' || car.price === '' || car.description === '') {
            setError('All fields are required!');
            return;
        }

        
        if (Number(car.price) < 0) {
            setError('Price cannot be negative!');
            return;
        }
        

        editCarSubmitHandler(car);
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Car</h1>

                    
                    {error && (
                        <p className="error-msg">{error}</p>
                    )}

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