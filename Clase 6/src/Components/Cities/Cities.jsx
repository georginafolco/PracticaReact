import React from 'react'
import citiesStyles from './Cities.module.css'

const Cities = ({item}) => {
  return (
    <div className={citiesStyles.firstLevel}>
        <ul>
          <li className={citiesStyles.cities}>{item.city}</li>
        </ul>
          <ul className={citiesStyles.secondLevel}>
            <li>Id: {item.id}</li>
            <li>Country: {item.country}</li>
            <li>Population: {item.population}</li>
            <li>Color: {item.color}</li>
          </ul>
    </div>        
  )
}

export default Cities

//snippet component arrow function react => rafce