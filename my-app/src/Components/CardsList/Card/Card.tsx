import {FC, useState, MouseEvent, useEffect} from "react";
import styles from "./Card.module.scss"
import compareImg from "../../../accets/img/compare.png"
import successCompareImg from "../../../accets/img/after_click_compare.png"
import arrow from "../../../accets/img/Vector 1.png"

export const Card: FC<CardType> = (props) => {
    let {id, heading, description, price, img, volumes} = props
    let colors = ["Желтый", "Красный", "Зеленый"]
    let [goodCount, setGoodCount] = useState<number>(1)
    let [currentPrice, setCurrentPrice] = useState<number>(price);
    let [totalPrice, setTotalPrice] = useState<number>(currentPrice)
    let [currentColor, setCurrentColor] = useState<string>('Цвет')
    let [currentVolume, setCurrentVolume] = useState<number>(volumes[0].volume)
    let [isCompare, setIsCompare] = useState<boolean>(false)

    useEffect(() => {
        setTotalPrice(currentPrice * goodCount);
    }, [currentPrice, goodCount]);

    const chooseColorHandler = (event: MouseEvent<HTMLParagraphElement>) => {
        setCurrentColor(event.currentTarget.innerText)
    }

    const increaseGoodCountHandler = () => {
        setGoodCount(goodCount + 1)
        setTotalPrice((goodCount + 1) * price)
    }

    const decreaseGoodCountHandler = () => {
        if (goodCount !== 1) {
            setGoodCount(goodCount - 1)
            setTotalPrice((goodCount - 1) * price)
        }
    }

    const changeVolumeHandler = (volume: number, price: number) => {
        setCurrentVolume(volume)
        setCurrentPrice(price)
    }

    const buyGood = () => {
        return {
            id,
            goodCount,
            currentPrice,
            totalPrice,
            currentColor,
            currentVolume
        }
    }

    return (
        <>
            <div className={styles.card_container}>
                <div className={styles.block_1}>
                    <p className={styles.card_logo}>new</p>
                    <img src={img} alt="card_img"/>
                    <button onClick={() => setIsCompare(!isCompare)}>
                        <img
                            src={isCompare ? successCompareImg : compareImg}
                            alt="compare"
                        />
                    </button>
                </div>

                <div className={styles.block_2}>
                    <h4>{heading}</h4>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.block_3}>
                    <div className={styles.color_block}>
                        <div className={styles.color_heading}>
                            <div>
                                <p>{currentColor}</p>
                            </div>
                            <img src={arrow} alt="arrow"/>
                        </div>
                        <div className={styles.color_items}>
                            {colors.map((color, index) =>
                                <div className={styles.color_item}
                                     onClick={(event) => chooseColorHandler(event)}
                                     key={index}>
                                    <p>
                                        {color}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>{totalPrice} грн</p>
                </div>

                <div className={styles.volume_check}>
                    {volumes.map((volume, index) =>
                        <div className={styles.volume_item}>
                            <input
                                type='radio'
                                name={id}
                                value={volume.volume}
                                id={`${id}${volume.volume}`}
                                key={index}
                                onChange={() => changeVolumeHandler(volume.volume, volume.price)}
                                defaultChecked={index === 0}
                            />
                            <label htmlFor={`${id}${volume.volume}`}>{volume.volume} мл</label>
                        </div>
                    )}
                </div>

                <div className={styles.buttons}>
                    <div className={styles.good_count}>
                        <button onClick={decreaseGoodCountHandler}>-
                        </button>
                        <span>{goodCount}</span>
                        <button onClick={increaseGoodCountHandler}>
                            +
                        </button>
                    </div>
                    <button
                        className={styles.buy}
                        onClick={buyGood}
                    >Купить
                    </button>
                </div>
            </div>
        </>
    )
}

// types
export type CardType = {
    id: string
    heading: string
    description: string
    price: number
    img: string
    volumes: Array<{ volume: number, price: number }>
}