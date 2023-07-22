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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                element: <MyCollage />,
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