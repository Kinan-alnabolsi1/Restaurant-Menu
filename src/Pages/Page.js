import Swipe from '../Components/Swipe'
import FoodFilter from '../Components/FoodFilter'

const Page = () => {
  return (
    <div>
        <div className='flex justify-center items-center text-5xl font-bold py-5 text-[#facc15]'>LOGO</div>
            <div><Swipe/></div>
            <div><FoodFilter/></div>
    </div>
  )
}

export default Page