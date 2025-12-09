const baseUrl = 'http://localhost:3030/data/likes';

export const likeCar = async (carId) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': auth.accessToken
        },
        body: JSON.stringify({ carId })
    });

    return await response.json();
};


export const getCarLikes = async (carId) => {
    const query = encodeURIComponent(`carId="${carId}"`);
    
    
    const response = await fetch(`${baseUrl}?where=${query}`);
    return await response.json();
};