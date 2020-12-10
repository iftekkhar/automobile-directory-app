export default (cars = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_CAR':
            return [...cars, action.payload];
        default:
            return cars;
    }
}