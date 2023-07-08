import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faEllipsisVertical,
  faHeart,
  faBackwardStep,
  faCirclePause,
  faForwardStep,
  faRepeat
} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="bg-gradient-to-b from-[#af8293] to-gray-900 text-white pb-6 min-h-screen">
      <div className="mx-6 relative h-[80vh] md:h-[90vh]">

        <header className="flex items-center justify-between top-5 absolute w-full">
          <FontAwesomeIcon icon={faAngleDown} className="h-6" />
          <p className="font-semibold">Tocando IGOR</p>
          <FontAwesomeIcon icon={faEllipsisVertical} className="h-6" />
        </header>

        <picture className='absolute top-24'>
          <img
            src="https://cdns-images.dzcdn.net/images/cover/041ab5ceb6fb6ebf9512966835be9e1b/350x350.jpg"
            alt="Igor img"
          />
        </picture>

        <div className='absolute bottom-0 w-full'>
          <div>
            <div className="mb-4">
              <p className="text-xl font-semibold">IGOR'S THEME</p>
              <p className="text-slate-300 text-sm">Tyler, The Creator</p>
            </div>
          </div>
          
          <div className="w-full">
            <p className="border-2 mb-2"></p>
            <div className="flex justify-between mb-2">
              <p className="text-xs text-slate-300">0:00</p>
              <p className="text-xs text-slate-300">3:20</p>
            </div>
          </div>
          <div className="flex justify-between items-center max-w-sm m-auto">
            <FontAwesomeIcon icon={faHeart} className="h-7 md:h-6" />
            <FontAwesomeIcon icon={faBackwardStep} className="h-8 md:h-6" />
            <FontAwesomeIcon icon={faCirclePause} className="h-16 md:h-14" />
            <FontAwesomeIcon icon={faForwardStep} className="h-8 md:h-6" />
            <FontAwesomeIcon icon={faRepeat} className="h-7 md:h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
