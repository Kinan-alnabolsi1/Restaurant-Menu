import Swipe from '../Components/Swipe'
import FoodFilter from '../Components/FoodFilter'
import logo from '../assets/anteka_logo.png'
const Page = () => {
  return (
    <div>
        <div className='flex justify-center items-center font-bold py-5 '>
          <img src={logo} alt="LOGO" className='w-32 h-auto'/>
        </div>
            <div><Swipe/></div>
            <div><FoodFilter/></div>
    </div>
  )
}

export default Page