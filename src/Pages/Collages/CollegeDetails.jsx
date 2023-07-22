import { useParams } from "react-router-dom";
import useSingleCollage from "../Hooks/useSingleCollage";
import { FaStar } from "react-icons/fa";

const CollegeDetails = () => {
    const { id } = useParams();
    const [collage] = useSingleCollage(id);
    console.log(collage);
    return (
        <div className="max-w-7xl mx-3 my-9 lg:mx-auto">
            {
                <div className="card bg-base-100 shadow-xl">
                    <figure className="lg:h-[330px]"><img className="" src={collage.collegeImage} alt={collage.collegeName} /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-3xl">{collage.collegeName}</h2>
                        <p className="flex items-center gap-2"><span className="font-semibold">Ratings: </span>{collage.rating}/5 <FaStar className="text-yellow-500" /></p>
                        <p><span className="font-semibold">Admission Dates: </span>{collage.admissionDates}</p>
                        <p><span className="font-semibold">Admission Process: </span>{collage.admissionProcess}</p>
                        <div>
                            <h2 className="text-2xl font-bold">Events</h2>
                            <div className="grid grid-cols-2 my-3">
                                <p className="font-bold">Event Title</p>
                                <p className="font-bold">Date</p>
                            </div>
                            {collage.eventsDetails &&
                                collage.eventsDetails.map((singleEvent, ind) =>
                                    <div key={ind} className="grid grid-cols-2">
                                        <p className="font-semibold">{singleEvent.eventName}</p>
                                        <p className="font-semibold">{singleEvent.date}</p>
                                    </div>
                                )
                            }

                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Research Works</h2>
                            <div className="grid grid-cols-2 my-3">
                                <p className="font-bold">Author</p>
                                <p className="font-bold">Research Title</p>
                            </div>
                            { collage.researchWorks &&
                                collage.researchWorks.map((singleEvent, ind) =>
                                    <div key={ind} className="grid grid-cols-2">
                                        <p className="font-semibold">{singleEvent.author}</p>
                                        <p className="font-semibold">{singleEvent.title}</p>
                                    </div>
                                )
                            }

                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Sports Category</h2>
                            <ul className="steps steps-vertical lg:steps-horizontal my-3">
                                {collage.sportsCategories && collage.sportsCategories.map((singleSport, ind) => (
                                    <li key={ind} className="step step-primary">
                                        {singleSport}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CollegeDetails;