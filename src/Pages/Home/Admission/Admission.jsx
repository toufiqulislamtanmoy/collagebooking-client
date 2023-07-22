import { useEffect, useState } from "react";
import useAllCollageData from "../../Hooks/useAllCollageData";
import SectionTitle from "../../Shared/SectionTitle";
import { Link } from "react-router-dom";

const Admission = () => {
    const [collages] = useAllCollageData();
    const [admissionOpen, setAdmissionOpen] = useState([]);
    useEffect(() => {
        const admissionOpenColleges = collages.filter(college => college.admissionAvailable === true);
        setAdmissionOpen(admissionOpenColleges);
    }, [collages])
    console.log(admissionOpen);
    return (
        <div className="my-10 lg:px-0 px-3">
            <SectionTitle title="Admission Open" />
            <div className="p-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">List of Admission Available Colleges Apply Now!</h2>
                <ul className="space-y-2">
                    {admissionOpen &&
                        admissionOpen.map((collage,index) => (
                            <li key={collage._id} className="text-lg text-blue-600">
                                <Link to={`/admission/${collage._id}`}>{index+1}. {collage.collegeName}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Admission;