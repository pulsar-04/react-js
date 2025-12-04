const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
};

export const create = async (carData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
};