const items = [
    {
        ID: 1,
        name: 'Capitan America CW',
        price: 999,
        description: 'Lorem Ipsum',
        // picture: <img src="./images/capCw.png" alt="capitan-america-cw" />
    },
    {
        ID: 2,
        name: 'Hulk',
        price: 999,
        description: 'Lorem Ipsum',
    },
    {
        ID: 3,
        name: 'Loki',
        price: 999,
        description: 'Lorem Ipsum',
    },
    {
        ID: 4,
        name: 'Pantera Negra',
        price: 999,
        description: 'Lorem Ipsum',
    },
    {
        ID: 5,
        name: 'Black Widow',
        price: 999,
        description: 'Lorem Ipsum',
    },
    {
        ID: 6,
        name: 'War Machine',
        price: 999,
        description: 'Lorem Ipsum',
    },
    {
        ID: 7,
        name: 'Winter Soldier',
        price: 999,
        description: 'Lorem Ipsum',
    }
];

export const getItems = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(items)
        }, 2000)
    })
};

export const getItemsById = () => {

};