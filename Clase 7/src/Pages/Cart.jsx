/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({cart}) => {

    return (
        <div className="potion-container">
            <h2 className='principalFont'>Potion</h2>
            {cart.map(item => <li>{item.name}</li>)}
        </div>
    )
}

export default Cart 