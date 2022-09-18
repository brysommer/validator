const db = [
    {id: 1, model: 'iPhone 11', storage: '64GB', color: 'Black', price: 18297, picture: './img/11blk.webp', condition: 'Ідеальний стан',},
    {id: 2, model: 'iPhone 11', storage: '64GB', color: 'White', price: 18297, picture: './img/11wht.webp', condition: 'Ідеальний стан',},
    {id: 3, model: 'iPhone 12', storage: '64GB', color: 'Green', price: 24002, picture: './img/12Green.webp', condition: 'Ідеальний стан',},
    {id: 4, model: 'iPhone 12', storage: '128GB', color: 'Blue', price: 27262, picture: './img/12blue.webp', condition: 'Ідеальний стан',},
    {id: 5, model: 'iPhone 12', storage: '128GB', color: 'Red', price: 27262, picture: './img/12RED.webp', condition: 'Ідеальний стан',},
    {id: 6, model: 'iPhone 12 Pro', storage: '128GB', color: 'Silver', price: 34189, picture: './img/12Prosilver.webp', condition: 'Ідеальний стан',},
    {id: 7, model: 'iPhone 12 Pro Max', storage: '128GB', color: 'Graphite', price: 37857, picture: './img/12PMblk.webp', condition: 'Ідеальний стан',},
    {id: 8, model: 'iPhone 12 Pro Max', storage: '256GB', color: 'Gold', price: 39487, picture: './img/12PMgold.webp', condition: 'Ідеальний стан',},
    {id: 9, model: 'iPhone 13', storage: '128GB', color: 'Green', price: 30114, picture: './img/13green.webp', condition: 'Ідеальний стан',},

];


const getItem = (id) => {
    const result = db.find(item => item.id === id);
    return result;
};


module.exports = {
    getItem
}