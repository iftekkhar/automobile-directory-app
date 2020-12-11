import axios from 'axios';

const url = 'http://localhost:5000/cars'

export const fetchCars = () => axios.get(url)
export const createNewCar = newCar => axios.post(url, newCar);
export const updateCar = (id, updatedCar) => axios.patch(`${url}/${id}`, updatedCar);
export const deleteCar = (id) => axios.delete(`${url}/${id}`);