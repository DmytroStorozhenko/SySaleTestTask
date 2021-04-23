import {Card, CardType} from "./Card/Card";
import styles from "./CardsList.module.scss"
import item_1 from '../../accets/img/item_1.jpg'
import item_2 from '../../accets/img/item_2.jpg'
import item_3 from '../../accets/img/item_3.png'

let initialState: Array<CardType> = [
    {
        id: '1',
        img: item_1,
        heading: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        price: 200,
        volumes:
            [
                {price: 200, volume: 100},
                {price: 350, volume: 200},
                {price: 450, volume: 300}
            ]
    }, {
        id: '2',
        img: item_2,
        heading: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        price: 200,
        volumes:
            [
                {price: 200, volume: 100},
                {price: 350, volume: 200},
                {price: 450, volume: 300}
            ]
    }, {
        id: '3',
        img: item_3,
        heading: 'Шампунь',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        price: 200,
        volumes:
            [
                {price: 200, volume: 100},
                {price: 350, volume: 200},
                {price: 450, volume: 300}
            ]
    }
]

export const CardsList = () => {
    return (
        <>
            <div className={styles.goods}>
                {
                    initialState.map((card, index) =>
                    <Card
                        id={card.id}
                        img={card.img}
                        heading={card.heading}
                        description={card.description}
                        price={card.price}
                        volumes={card.volumes}
                        key={index}
                    />
                    )
                }
            </div>
        </>
    )
}