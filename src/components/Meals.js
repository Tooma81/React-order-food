import { useState, useEffect } from 'react'; 
import MealItem from './MealItem';

const Meals = (props) => {
    const [loadedMeals, setLoadedMeals] = useState([]) 
    
    useEffect(() => {
      const fetchMeals = async () => {
        try { 
            const response = await fetch('http://localhost:3001/meals')
            const data = await response.json()
            setLoadedMeals(data) 
        } catch (error) {
          console.error('Error fetching data')
        }
      } 
      fetchMeals() 
    }, [])

    console.log(loadedMeals)
    return (
        <ul id="meals">
            {
                loadedMeals.map((meal) => (<MealItem meal={meal}/>))
            }
            
            
        </ul>
    )
}

export default Meals