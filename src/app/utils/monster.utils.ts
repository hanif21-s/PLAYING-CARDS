export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'img/plant.jpg',
        color: 'rgba(135, 255, 124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'img/electric.png',
        color: 'rgb(255, 2, 2)'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'img/fire.jpg',
        color: 'rgba(205, 104, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl: 'img/water.jpg',
        color: 'rgba(118, 235, 124)'
    },
}