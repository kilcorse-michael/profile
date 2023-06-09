import { useRef} from 'react'
import { onScreen } from '../hooks/onScreen';

export default function PhiloSlide(){

    const ref = useRef<SVGElement>(null);
    const isOnScreen = onScreen(ref);
    
    console.log(isOnScreen)

    return(    
    <div className="flex grow flex-col md:flex-row items-center justify-center h-screen">
        <div className="grow w-full h-full bg-violet-500 text-center">
            <div className='w-1/2 m-5'>
                <svg ref={ref} id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 435.18 782.4">
                    <path d="m32.51,777.25s50.88-102.7,71.05-134.28c0,0,13.16-31.58,7.89-37.72l15.79-95.61s.88-10.53,7.89-22.81l16.67-55.26s0-26.32,18.42-43.86l4.39-10.46s-1.75-31.65,0-38.67c0,0,12.28-18.42,33.33,8.77v71.93s-10.53,12.28-10.53,13.16c0,0,5.26,28.95,0,49.12l10.53,38.6s6.14,33.33,0,62.28l2.73,22.81s2.53,21.05,30.6,21.05l128.07-1.75s18.42-.88,17.54-15.79c0,0-18.42-18.42,4.39-42.98v-19.3s-7.02-27.19,0-34.21v-48.25s-3.51-4.39,0-27.19v-160.53s6.14-20.18-29.82-24.56h-126.32s-32.94,1.75-23.05,31.58c0,0-35.73-31.58,26.56-40.35s142.11,0,142.11,0c0,0,18.42-2.63,23.68,58.77,0,0-14.91,25.44-7.89,57.02,0,0,65.79-21.93,24.56,39.47l-24.56,17.54s-10.53,7.02,3.51,7.89,31.58,12.28,27.19,32.46-28.95,21.12-28.95,21.12c0,0-14.91,12.21,4.39,11.33s28.95,19.58,28.95,19.58c0,0,4.39,25.16-22.81,41.83,0,0-9.65,5.26-12.28-3.51s-12.28-27.19.88,19.3c0,0,34.21-5.26,28.07,28.95,0,0-.65,14.67-26.32,21.93,0,0-72.81,40.35-74.56,52.63,0,0-85.96,79.82-100,77.19,0,0-17.54,20.32-13.16,30.77s-178.95,0-178.95,0ZM265.84,239.08s-.88-30.4,0-163.65c0,0,11.4-120.18-142.98-56.14s54.39,80.7,54.39,80.7c0,0,240.35,27.19-177.19,68.42m219.3,164.91l-.88,230.7h163.16v-251.75h-162.28c-.52,3.93-1.75,8.63-3.21,13.31-3.44,10.99-8.19,21.78-8.19,21.78" 
                        fill="none" 
                        stroke="#231f20"
                        strokeWidth="1%" 
                        strokeMiterlimit="10"
                        pathLength="1"
                        className={isOnScreen ? "path" : ""}/>
                </svg>
            </div>
        </div>
        <div className=" flex flex-col w-full h-full text-white  bg-black items-center justify-center">
            <h1 className='text-center text-4xl mb-5 font-thin'>Where design meets technology</h1>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti aperiam corrupti pariatur debitis ullam sunt voluptatum! Unde quos sed quas labore illum. Eaque nulla error fugit aliquid eveniet ipsum vel.</p>
        </div>
    </div>);
}