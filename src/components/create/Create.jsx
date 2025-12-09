import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import * as carService from '../../services/carService';

export default function Create() {
    const navigate = useNavigate();

    const createCarSubmitHandler = async (values) => {
        try {
            await carService.create(values);
            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }
    }

    const { values, changeHandler, onSubmit } = useForm({
        brand: '',
        model: '',
        imageUrl: '',
        price: '',
        description: '',
    }, createCarSubmitHandler);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Car Offer</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" placeholder="BMW" value={values.brand} onChange={changeHandler} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" placeholder="3 Series" value={values.model} onChange={changeHandler} />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="http://..." value={values.imageUrl} onChange={changeHandler} />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="20000" value={values.price} onChange={changeHandler} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>

                    <input type="submit" className="btn submit" value="Create Car" />
                </div>
            </form>
        </section>
    );
}