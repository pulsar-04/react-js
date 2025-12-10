import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as carService from '../../services/carService';

export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [cars, setCars] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); 

    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        
        
        if (!searchText.trim()) return;

        try {
            const result = await carService.search(searchText);
            setCars(result);
            setHasSearched(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="search-page" style={{textAlign: 'center'}}>
            <h1 style={{color: '#2c3e50', marginBottom: '30px'}}>Search by Brand</h1>

            
            <form className="form-inline" onSubmit={onSearchSubmit} style={{marginBottom: '50px'}}>
                <input 
                    type="text" 
                    className="search-input" 
                    name="search" 
                    value={searchText}
                    onChange={onSearchChange}
                    placeholder="e.g. BMW, Audi..." 
                    style={{width: '300px', display: 'inline-block', marginRight: '10px'}}
                />
                <button type="submit" className="btn submit" style={{width: 'auto', margin: '0', display: 'inline-block'}}>Search</button>
            </form>

            
            <div className="search-result">
                {cars.length > 0 ? (
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
                        {cars.map(car => (
                            <div className="allCars-info" key={car._id}>
                                <img src={car.imageUrl} alt={car.brand} />
                                <h6>{car.brand} {car.model}</h6>
                                <h2>Price: ${car.price}</h2>
                                <Link to={`/catalog/${car._id}`} className="details-button">Details</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    
                    hasSearched && <h2 className="no-articles">No results found.</h2>
                )}
            </div>
        </section>
    );
}