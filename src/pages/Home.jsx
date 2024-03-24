import Hero from "../components/Hero";
import Wave from "../assets/wave.svg"

const Home = () => {
    return (
        <div className='flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]'>
           <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={Wave} alt="" />
        </div>
    );
};

export default Home;