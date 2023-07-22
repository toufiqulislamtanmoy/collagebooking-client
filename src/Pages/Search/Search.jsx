import { Link, useParams } from "react-router-dom";
import useAllCollageData from "../Hooks/useAllCollageData";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle";

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const { searchText } = useParams();
    const [collages] = useAllCollageData();
    useEffect(() => {
        const lowercaseSearchText = searchText.toLowerCase();
        const filterData = collages.filter((item) => item.collegeName.toLowerCase().includes(lowercaseSearchText));
        setSearchResult(filterData);
    }, [searchText, collages]);

    console.log(searchResult)
    return (
        <div>
            <SectionTitle title="Search Result" />

            {
                searchResult.length > 0 ? (
                    <div className="max-w-7xl my-7 mx-5 lg:mx-auto gap-5 grid grid-cols-1 md:grid-cols-3">
                        {searchResult.map((collage) => (
                            <div key={collage._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={collage.collegeImage} alt={collage.collegeName} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold text-3xl">{collage.collegeName}</h2>
                                    <p className="flex items-center gap-2">
                                        <span className="font-semibold">Ratings: </span>
                                        {collage.rating}/5 <FaStar className="text-yellow-500" />
                                    </p>
                                    <p>
                                        <span className="font-semibold">Admission Dates: </span>
                                        {collage.admissionDates}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Total Research works: </span>
                                        {collage.researchWorks.length}
                                    </p>

                                    <div className="card-actions my-3">
                                        <Link to={`/collegeDetails/${collage._id}`} className="btn btn-primary w-full">
                                            See Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center">No results found.</p>
                )
            }

        </div>
    );
};

export default Search;