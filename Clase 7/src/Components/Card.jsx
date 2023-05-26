import { useState } from "react"
import cardStyles from './Card.module.css'

// eslint-disable-next-line react/prop-types
const Card = ({item, cart, setCart}) => {
   
    // eslint-disable-next-line react/prop-types
    const {name, description, img} = item
    const [counter, setCounter] = useState(0)

    const sum = () => {
        setCounter(counter + 1);
    }

    const subt = () => {
        setCounter(counter - 1)
    }

    return (
        <div className={cardStyles.card}>
            <img className={cardStyles.cardImg} src={img} alt="" />
            <h4 className={cardStyles.title}>{name}</h4>
            <p className={cardStyles.description}>{description}</p>
            <div className={cardStyles.buttonCounterContainer}>
                <button className={cardStyles.buttonCounter} disabled={counter===0} onClick={subt}>-</button>
                <h5>{counter}</h5>
                <button className={cardStyles.buttonCounter} onClick={sum}>+</button>
            </div>
            <div className={cardStyles.buttonAddToCartContainer}>
                <button className={cardStyles.buttonAddToCart} onClick={() => setCart([...cart, item])}>Add to the Potion</button>
            </div>
        </div>
    )
}

export default Card