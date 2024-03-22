import logo from '.././Assests/Images/logo.png';
function Header(){
  return (
    <header id='header' className="flex items-center align-center justify-around bg-gray-900 text-white p-[1rem]">
      <div className='flex gap-[1rem] items-center align-center'>
        <div>
          <img src={logo}></img>
        </div>
        <span className='text-2xl'>GeekFoods</span>
      </div>
      <ul className='flex gap-[1.5rem]'>
        <li><a className='hover:text-blue-500 font-medium' href="#">Home</a></li>
        <li><a className='hover:text-blue-500' href="#">Quotes</a></li>
        <li><a className='text-blue-500 font-medium' href="#">Restaurants</a></li>
        <li><a className='hover:text-blue-500 font-medium' href="#">Foods</a></li>
        <li><a className='hover:text-blue-500 font-medium' href="#">Contact</a></li>
      </ul>
      <div>
        <a href="#" className="bg-blue-600 hover:bg-blue-700 pl-[1rem] pr-[1rem]  p-[.5rem] rounded-md">Get started</a>
      </div>
    </header>
  );
}

export default Header;