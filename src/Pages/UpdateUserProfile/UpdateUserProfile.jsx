import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProviders";
import Lottie from "lottie-react";
import updateProfile from "../../assets/animations/update_profile.json"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)

        updateUserProfile(data.name, user.photoURL).then(() => {

            /********Insert user details in the database********/
            const updateData = {
                name: data.name,
                email: data.email,
                address: data.address,
                university: data.university
            }

            fetch(`https://collagebooking-server.vercel.app/updateProfile/${user?.email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateData)
            }).then(res => res.json())
                .then(data => {

                    console.log(data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Account Update successfully',
                    })
                    navigate("/profile", { replace: true });
                });


        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error}`,
            })
        });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
                <div className="text-center lg:text-left">

                    <Lottie animationData={updateProfile} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md">
                    <div className="card-body">
                        <h1 className="text-3xl font-semibold">Update Profile</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address", { required: true })} type="text" placeholder="Address" className="input input-bordered" />
                                {errors.address && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input {...register("university", { required: true })} type="text" placeholder="University" className="input input-bordered" />
                                {errors.university && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-xl">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserProfile;