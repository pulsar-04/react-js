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
{/* Details function for the cars */}
export const getOne = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
    const result = await response.json();
    return result;
};

{/* delet functions for the cars */}
export const remove = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });

    return response.json();
};
{/* edit(update) functions for the cars */}
export const update = async (carId, carData) => {
    const response = await fetch(`${baseUrl}/${carId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
};
