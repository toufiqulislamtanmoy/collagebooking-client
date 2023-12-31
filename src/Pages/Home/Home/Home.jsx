import FamousCollages from "../FamousCollages/FamousCollages";
import GraduatedGalary from "../GraduatedGalary/GraduatedGalary";
import ResearchPerpars from "../ResearchPapers/ResearchPerpars";
import TopSection from "../TopSection/TopSection";
import UserReview from "../UserReview/UserReview";


const Home = () => {
    return (
        <>
           <TopSection/>
           <FamousCollages/>
           <GraduatedGalary/>
           <ResearchPerpars/>
           <UserReview/>
        </>
    );
};

export default Home;