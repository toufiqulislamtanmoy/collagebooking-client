import Lottie from "lottie-react";
import error404 from "../../assets/animations/pageNotFound.json"
import { Link } from "react-router-dom";
const ResearchNotFound = () => {
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center space-y-5'>
            <div className='w-1/5'>
                <Lottie animationData={error404}></Lottie>
            </div>
            <h3 className='text-7xl font-bold'>Research Paper Not Found</h3>
            <Link className='text-3xl underline' to="/">Go To Home</Link>
        </div>
    );
};

export default ResearchNotFound;