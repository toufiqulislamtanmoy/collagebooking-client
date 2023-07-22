import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Link } from "react-router-dom";

const MyCollage = () => {
    const [myAppliedCollage, setMyAppliedCollage] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://collagebooking-server.vercel.app/admitCollage/${user?.email}`).then(res => res.json()).then(data => {
            console.log(data);
            setMyAppliedCollage(data);
        })
    }, [])
    return (
        <div className="max-w-7xl mx-3 my-9 lg:mx-auto">
            {
                myAppliedCollage.map(item =>
                    <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl my-3">
                        <div className="lg:w-1/2 p-0 lg:p-5">
                            <figure ><img src={item.collage.collegeImage} alt="Album" /></figure>
                            <h3 className="text-xl text-center lg:text-left"><span className="font-bold">College Name:</span> {item.collage.collegeName}</h3>
                        </div>
                        <div className="card-body">
                            <figure className="w-[120px] h-[120px]" ><img src={item.candidate_image} alt="Album" /></figure>
                            <h2 className="card-title"><span className="font-bold">Name:</span> {item.candidateName}</h2>
                            <h2><span className="font-bold m-0">Date of Birth:</span> {item.cDOB}</h2>
                            <h2><span className="font-bold">Phone:</span> {item.candidatePhoneNumber}</h2>
                            <h2><span className="font-bold">Address:</span> {item?.address}</h2>
                            <h2><span className="font-bold">Subject:</span> {item?.subject}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions">
                                <Link to={`/review/${item.collage._id}`} className="btn bg-transparent border-2 border-gray-300">Give Review</Link>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default MyCollage;