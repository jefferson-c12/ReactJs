const items = [
    {
        ID: 1,
        name: 'Capitan America CW',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/capCw.webp'
    },
    {
        ID: 2,
        name: 'Hulk',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/hulk.webp'
    },
    {
        ID: 3,
        name: 'Loki',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/loki.webp'
    },
    {
        ID: 4,
        name: 'Pantera Negra',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/blackPanth.webp'
    },
    {
        ID: 5,
        name: 'Black Widow',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/blackWidow.webp'
    },
    {
        ID: 6,
        name: 'War Machine',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/wmachine.webp'
    },
    {
        ID: 7,
        name: 'Winter Soldier',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/winterSoldier.webp'
    }
];

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 100)
    })
};

export const getItemsById = () => {

};
