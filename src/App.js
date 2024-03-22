import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import jsonData from './data.json';
import RestaurantCard from './Components/RestaurantCard';
import PaginationRounded from './Components/PaginationRounded';
import { useState } from 'react';
import Header from './Components/Header'
function App() {
  // console.log(jsonData);
  let [currentPage, updateCurrentPage] = useState(1);
  let [restaurantData, updateRestaurantData] = useState(jsonData);
  let [filterRestaurantNameQuery, updateFilterRestaurantNameQuery] = useState('');
  let begin = (currentPage*25)-25;
  let end = (currentPage*25);
  let currentRestaurants = restaurantData.slice(begin,end-1);  
  let totalNoOfPages = Math.floor(restaurantData.length/25);

// helper function
  function filterRestaurantsBasedOnMatchingName(query){
    // first thing is update 
      updateFilterRestaurantNameQuery(query);
    // remaining task
      let output = jsonData.filter((restaurant)=>restaurant.name.toLowerCase().includes(query.toLowerCase()));        
      updateRestaurantData(output);
      // console.log(query)
  }
  function filterRestaurantsBasedOnRating(rating){
    // is there any value inside filterRestaurantNameQuery
    let output = [];
    if(filterRestaurantNameQuery.length >0 ){
      // use jsonData along with nameFilter
      output = jsonData.filter(
        (restaurant)=>(restaurant.name.toLowerCase().includes(filterRestaurantNameQuery.toLowerCase()) && typeof restaurant.rating === "number" && restaurant.rating >= rating )
        );
    }else{
      // use jsonData
      output = jsonData.filter((restaurant)=>restaurant.rating >= rating);
    }
    updateRestaurantData(output);
    // console.log(query)
  }
  
  
// return JSX  
  return (
    <div>

      <Header />
      <div className='flex flex-col items-center mb-[2rem] p-[2rem]'>
        <div className='wrapperFilters flex gap-[1rem] items-center '>

          <input type="text" placeholder="Search Restaurants..." className="bg-slate-100 p-2 text-slate-950 placeholder:text-slate-500  rounded-md focus:outline-none focus:ring focus:ring-emerald-700 text-xl" onChange={(e)=>{filterRestaurantsBasedOnMatchingName(e.target.value)}}/>

          <div className='flex gap-[1rem] items-center'>
            <label htmlFor="inputMinimumRating" className="text-slate-900">Minimum Rating: </label>
            <input  type='number' defaultValue={0} className="bg-slate-100 p-2 text-slate-950 placeholder:text-slate-500  rounded-md focus:outline-none focus:ring focus:ring-emerald-700 text-xl" min={0} max={5} onChange={(e)=>{filterRestaurantsBasedOnRating(e.target.value)}}/>
          </div>
        </div>
        <div className='wrapperRestaurantsGrid grid grid-cols-3 gap-y-[3rem] gap-[1rem] max-w-[90rem] p-[2rem]'>
          {
            currentRestaurants.map(
              (data)=><RestaurantCard key= {data._id} restaurant={data} />
            )
          }
          {/* <div >Current page is : {currentPage}</div> */}
    
        </div>
          <PaginationRounded updateCurrentPage={updateCurrentPage} totalNoOfPages={totalNoOfPages}/>
      </div>
    </div>
  )

}

export default App;
