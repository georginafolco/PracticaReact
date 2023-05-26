/* eslint-disable react/prop-types */
import Card from '../Components/Card'

const Home = ({cart, setCart}) => {

    let ingredients = [
        {id: 1, name: 'Dragons Blood', description:'A potent red liquid extracted from the blood of dragons. Known for its ability to enhance magical spells and potions', img: './ingredient1.png'},
        {id: 2, name: 'Unicorn Hair', description:'Delicate strands of silvery-white hair obtained from unicorns. Renowned for their magical properties, often used in wand coress', img: './ingredient2.png'},
        {id: 3, name: 'Wolfsbane', description:'A plant with distinctive blue flowers. Wolfsbane is used in potions to help control and alleviate the symptoms of lycanthropy', img: './ingredient6.png'},
        {id: 4, name: 'Essence of Dittany', description:'A healing potion ingredient made from the dittany plant. Known for its ability to close wounds and promote rapid healing', img: './ingredient4.png'},
        {id: 5, name: 'Floo Powder', description:'A fine, green powder that enables users to travel through fireplaces and access the Floo Network, a magical transportation system', img: './ingredient5.png'},
        {id: 3, name: 'Phoenix Feather', description:'Feathers shed by phoenixes, possessing powerful magical properties. Often used as a core material in high-quality wands', img: './ingredient3.png'},
        {id: 7, name: 'Gillyweed', description:'A magical plant that grants underwater breathing and the ability to swim with great speed. Often used by merpeople and skilled divers', img: './ingredient7.png'},
        {id: 8, name: 'Boomslang Skin', description: 'Shimmering, shed skin of the Boomslang snake. Its essence is a key ingredient in Polyjuice Potion, enabling the user to assume another persons appearance', img: './ingredient8.png'},
    ]

    return (
        <>
        <h1 className="principalFont">Mystic Brews & Charms</h1>
        <p className='mssg'>Craft Mystical Wonders: Unleash Your Inner Sorcerer with Enchanting Potions</p>
        <div className='cardContainer'>
            {ingredients.map(ingredient => <Card key={ingredient.id} item={ingredient} cart={cart} setCart={setCart} />)}
        </div>
        </>
    )
}

export default Home
