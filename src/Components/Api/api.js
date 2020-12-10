import axios from 'axios';

const url = 'http://localhost:5000/cars'

export const fetchCars = () => axios.get(url)
export const createNewCar = newCar => axios.post(url, newCar);