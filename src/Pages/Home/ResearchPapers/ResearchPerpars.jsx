import React from "react";
import useAllCollageData from "../../Hooks/useAllCollageData";
import SectionTitle from "../../Shared/SectionTitle";
import { Link } from "react-router-dom";

const ResearchPerpars = () => {
    const [collages] = useAllCollageData();


    return (
        <div className="max-w-7xl mx-auto my-10">
            <SectionTitle title="Research Papers" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>College Name</th>
                            <th>Researcher Name</th>
                            <th>Research Title</th>
                            <th>Visit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collages.map((college) => (
                            <React.Fragment key={college._id}>
                                {college.researchWorks.map((research, index) => (
                                    <tr key={`${college._id}-research-${index}`}>
                                        {index === 0 && (
                                            <td rowSpan={college.researchWorks.length}>
                                                {college.collegeName}
                                            </td>
                                        )}
                                        <td>{research.author}</td>
                                        <td>{research.title}</td>
                                        <td>
                                            <Link to={`${research?.link ? research?.link :'/researchNotFound'}`} className="text-blue-400">Visit Research</Link>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResearchPerpars;