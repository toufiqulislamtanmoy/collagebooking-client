import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalf } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle";
import Rating from "react-rating";
import useUserReview from "../../Hooks/useUserReview";


const UserReview = () => {
    const [reviews] = useUserReview();
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="User Reviews" />
            <Marquee>

                <div className="flex gap-9">

                    {reviews &&
                        reviews.map(reviews =>
                            <div key={reviews._id} className="card w-96 bg-base-100 shadow-xl my-10">
                                <figure><img className="rounded-xl p-3 h-[220px]" src={reviews.userPhoto} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{reviews.userName}</h2>
                                    <p className="font-bold">{reviews.collegeName}</p>
                                    <p>{reviews.message}</p>
                                    <div className="text-center text-yellow-500">
                                        <Rating
                                            placeholderRating={reviews.rating}
                                            emptySymbol={<FaStarHalf />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                            readonly
                                        />
                                    </div>
                                </div>
                            </div>
                        )

                    }
                </div>
            </Marquee>
        </div>
    );
};

export default UserReview;