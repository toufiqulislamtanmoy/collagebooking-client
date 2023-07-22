import FamousCollages from "../FamousCollages/FamousCollages";
import GraduatedGalary from "../GraduatedGalary/GraduatedGalary";
import TopSection from "../TopSection/TopSection";
import UserReview from "../UserReview/UserReview";


const Home = () => {
    return (
        <>
           <TopSection/>
           <FamousCollages/>
           <GraduatedGalary/>
           <UserReview/>
        </>
    );
};

export default Home;