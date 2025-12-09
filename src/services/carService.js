const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
};

export const getOne = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
    const result = await response.json();
    return result;
};

export const create = async (carData) => {
    
    const auth = JSON.parse(localStorage.getItem('auth'));
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': auth.accessToken 
        },
        body: JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
};

export const remove = async (carId) => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    const response = await fetch(`${baseUrl}/${carId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': auth.accessToken
        }
    });

    return response.json();
};

export const update = async (carId, carData) => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    const response = await fetch(`${baseUrl}/${carId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': auth.accessToken
        },
        body: JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
};