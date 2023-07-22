import Lottie from "lottie-react";
import reviewAnimation from "../../assets/animations/review.json"
import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Rating from 'react-rating-stars-component';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import useSingleCollage from "../Hooks/useSingleCollage";
import Swal from "sweetalert2";
const AddReview = () => {
    const { collegeID } = useParams();
    const [collage] = useSingleCollage(collegeID);
    const { user } = useContext(AuthContext);

    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();




    const onSubmit = data => {
        const reviewData = {
            ...data,
            userEmail: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            collegeID,
            collegeName: collage.collegeName
        }

        console.log(reviewData);

        fetch('https://collagebooking-server.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(data => {

                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Review add successfully',
                })
                navigate("/", { replace: true });
            });

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
                <div className="text-center lg:text-left">
                    <Lottie animationData={reviewAnimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md">
                    <div className="card-body">
                        <h1 className="text-3xl font-semibold">Add a Review</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control mt-6 justify-center">

                                <Controller
                                    name="rating"
                                    control={control}
                                    defaultValue={0}

                                    render={({ field: { value, onChange } }) => (
                                        <>
                                            <Rating
                                                count={5}
                                                value={value}
                                                onChange={onChange}
                                                size={24}
                                                activeColor="#ffd700"
                                                isHalf={false}
                                            />
                                            {errors.rating && <span className="text-red-500">{errors.rating.message}</span>}
                                        </>
                                    )}
                                />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Massage</span>
                                </label>
                                <textarea {...register("message", { required: true })} placeholder="Message" className="textarea textarea-bordered" />
                                {errors.message && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-xl">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;