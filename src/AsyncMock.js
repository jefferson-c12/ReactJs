const items = [
    {
        id: 1,
        name: 'Capitan America',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/capCw.webp'
    },
    {
        id: 2,
        name: 'Hulk',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/hulk.webp'
    },
    {
        id: 3,
        name: 'Loki',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/loki.webp'
    },
    {
        id: 4,
        name: 'Pantera Negra',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/blackPanth.webp'
    },
    {
        id: 5,
        name: 'Black Widow',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/blackWidow.webp'
    },
    {
        id: 6,
        name: 'War Machine',
        price: 999,
        description: 'Lorem Ipsum',
        picture: './images/imgProds/wmachine.webp'
    },
    {
        id: 7,
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

export const getItemById = (id) => {
    return new Promise((resolve) => {
        setTimeout((id) => {
            resolve(items.find(items.id === id))
        }, 100)
    })
};
