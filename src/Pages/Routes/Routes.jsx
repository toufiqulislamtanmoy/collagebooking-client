import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Collages from "../Collages/Collages";
import Admission from "../Home/Admission/Admission";
import AdmissionForm from "../Home/Admission/AdmissionForm";
import MyCollage from "../MyCollage/MyCollage";
import CollegeDetails from "../Collages/CollegeDetails";
import PrivetRoute from "./PrivetRoute";
import Search from "../Search/Search";
import AddReview from "../AddReview/AddReview";
import UserProfile from "../UserProfile/UserProfile";
import UpdateUserProfile from "../UpdateUserProfile/UpdateUserProfile";
import NotFound from "../NotFound/NotFound";
import ResearchNotFound from "../ResearchNotFound/ResearchNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<NotFound/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/researchNotFound",
                element: <ResearchNotFound />,
            },
            {
                path: "/collages",
                element: <Collages />,
            },
            {
                path: "/admission",
                element: <Admission />,
            },
            {
                path: "/admission/:id",
                element: <AdmissionForm />,
            },
            {
                path: "/myCollage",
                element: <PrivetRoute><MyCollage /></PrivetRoute>,
            },
            {
                path: "/profile",
                element: <PrivetRoute><UserProfile /></PrivetRoute>,
            },
            {
                path: "/updateProfile",
                element: <PrivetRoute><UpdateUserProfile /></PrivetRoute>,
            },
            {
                path: "/review/:collegeID",
                element: <PrivetRoute><AddReview/></PrivetRoute>,
            },
            {
                path: "/search/:searchText",
                element: <Search />,
            },
            {
                path: "/collegeDetails/:id",
                element: <PrivetRoute><CollegeDetails /></PrivetRoute>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            }
        ]
    },
    
]);
export default router;