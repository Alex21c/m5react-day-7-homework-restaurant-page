import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import jsonData from './data.json';
import RestaurantCard from './Components/RestaurantCard';
function App() {
  // console.log(jsonData);
  let currentRestaurants = jsonData.slice(0,2000);

  return (
    <div className='grid grid-cols-3 gap-[1rem]'>
      {
        currentRestaurants.map(
          (data)=><RestaurantCard key= {data._id} restaurant={data} />
        )
      }
    </div>
  )

}

export default App;
