import { ParallaxBanner} from 'react-scroll-parallax'
import frontImg from '../assets/2.png'
import backImg from '../assets/1.png'

export default function HeroIntro(){

    return(
        <>
        <ParallaxBanner
        layers={[
            { image: backImg, speed: -50 },
            {
            speed: -25,
            children: (
                <div className="absolute m-2 inset-0 flex flex-col text-center items-center justify-center">
                <h1 className="animate-fade-in text-6xl md:text-8xl text-white font-thin">MICHAEL KILCORSE</h1>
                <h1 className='animate-fade-in opacity-60 text-2xl md:text-4xl text-white font-thin'>Designer Developer Innovator</h1>
                </div>
            ),
            },
            { image: frontImg, speed: 5 },
        ]}
        className="h-screen w-screen"
        />
        <div className='absolute flex text-center inset-0'>
            
        </div>
    </>
    )
}