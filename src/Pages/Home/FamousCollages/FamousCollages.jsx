import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Link } from "react-router-dom";
import useAllCollageData from "../../Hooks/useAllCollageData";

const FamousCollages = () => {
    const [collages] = useAllCollageData();
    const [famousCollages, setFamousCollages] = useState([]);

    useEffect(() => {
        const sortedData = collages.sort((a, b) => b.rating - a.rating);
        const topThreeColleges = sortedData.slice(0, 3);
        setFamousCollages(topThreeColleges);
    }, [collages])

    return (
        <div>
            <SectionTitle title="Famous Collages" />
            <div className="max-w-7xl my-7 mx-5 lg:mx-auto gap-5 grid grid-cols-1 md:grid-cols-3">
                {
                    famousCollages.map(famousCollage =>

                        <div key={famousCollage._id} className="card bg-base-100 shadow-xl">
                            <figure><img src={famousCollage.collegeImage} alt={famousCollage.collegeName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-3xl">{famousCollage.collegeName}</h2>
                                <p><span className="font-semibold">Admission Dates: </span>{famousCollage.admissionDates}</p>
                                <div>
                                    <h1 className="text-xl font-bold">Recent Events</h1>
                                    {famousCollage.events}
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Research History</h1>
                                    {famousCollage.researchHistory}
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Sports</h1>
                                    {famousCollage.sports}
                                </div>
                                <div className="card-actions my-3">
                                    <Link to={`/collegeDetails/${famousCollage._id}`} className="btn btn-primary w-full">See Details</Link>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default FamousCollages;