/* eslint-disable no-undef */
import { useState } from "react"

const Form = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length > 3) {
            setSuccess(true)
        } else {
            setFail(true)
        }
    }

    return (

        <div className="container">
            <div className="form">
                <div>
                    <h3 className="title">Choose your Pokemon!</h3>
                    <p className="subtitle">Discover the extraordinary benefits of partnering with a Pokémon, as you unlock boundless potential, cultivate unbreakable bonds, and conquer every obstacle in your path</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>           
                        <label>Name:</label>
                        <input type="text" value={name} disabled={success} onChange={(e) => setName(e.target.value)} />
                        <label>Age:</label>
                        <input type="number" value={age} disabled={success} onChange={(e) => setAge(e.target.value)} />
                        <label>Pokemon:</label>
                        <input type="text" value={pokemon} disabled={success} onChange={(e) => setPokemon(e.target.value)} />
                        <button className="buttonSend">Send</button>
                        {fail && 'Double check your information'}
                    </form>
                    { success ? <p>Congratulations {name}! {pokemon} is the best choice!</p> : null }
                </div>
            </div> 
            <div className="image">
                <img src="/Pikachu.png" alt="" />
            </div>      
        </div>
       
    )
}

export default Form




