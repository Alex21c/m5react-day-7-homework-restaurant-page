import { Component } from "react";
export default class RestaurantCard extends Component{
  generateRatingsStars(rating){
    if(rating === 'Not yet rated'){
      return (<></>);
    }
    
    let isItHavingHalfStar = rating%1 !== 0;
    if(isItHavingHalfStar){
      rating = Math.floor(rating);
    }
    let activeStars=[];
    let inActiveStars = [];
    let i;
    // computing
      let numOfInActiveStars = 5-rating;
      let numOfActiveStars = 5-numOfInActiveStars;
      if(isItHavingHalfStar){
        --numOfInActiveStars;
      }
    // generating active stars
      for(i=1; i<=numOfActiveStars; i++){
        let uniqueKeyName = `active-${i}-${this.state._id}`;
        let activeStar = <i key={uniqueKeyName} className="fa-solid fa-star text-yellow-400"></i>;
        activeStars.push(activeStar);
      }
    // generating inAactive stars

      for(i=1; i<=numOfInActiveStars; i++){
        let uniqueKeyName = `inactive-${i}-${this.state._id}`;     
        let inActiveStar = <i  key={uniqueKeyName} className="fa-solid fa-star text-slate-300"></i>;        
        inActiveStars.push(inActiveStar);
      }
    // half star rating
      let halfStar = "";
      if(isItHavingHalfStar){
        halfStar= <i key={`halfstar-${this.state._id}`} className="fa-solid fa-star-half-stroke text-yellow-400"></i>
      }
    
    // console.log(numOfActiveStars, numOfInActiveStars)
    // generating output
      let output = (
        <div key={this.state._id}>
          {activeStars} {halfStar}  {inActiveStars}
        </div>
      );

    // return 
      return output;
  }

  constructor(props){
    super(props);
    this.state = {
      ...props.restaurant
    };

    
    
  }

  render(){
    
    // console.log(this.state);
    return (
      <section className="text-[1.2rem] bg-slate-50 max-w-[25rem]  rounded-xl shadow-xl flex flex-col justify-between">
        <div className="p-[2rem] flex flex-col gap-[.5rem]">
          <div className="wrapperRestaurantNameAndRating flex gap-[.5rem] items-center">
            <h2 className="text-[1.5rem] font-semibold text-slate-600 max-w-[12rem]">{this.state.name}</h2>
            <div className="text-[1.2rem]">
              {this.generateRatingsStars(this.state.rating)}
            </div>
            
          </div>

          <div className="text-slate-600">
            <i className="fa-solid fa-location-dot"></i> {this.state.address}, {this.state['address line 2']}
          </div>
          <div className="text-slate-600">
            {this.state.outcode} {this.state.postcode}
          </div>
        </div>

        <div className="bg-slate-100 px-[2rem] py-[1rem] rounded-b-xl">
          <div className="text-green-400 flex gap-[.5rem] text-[1.3rem]">
            <i className="fa-solid fa-utensils"></i>{this.state.type_of_food}
          </div>
          <div>
            <a className="text-blue-400 hover:underline transition" href="#">Visit Menu</a>
          </div>
        </div>
      
      </section>
    );
  }
}