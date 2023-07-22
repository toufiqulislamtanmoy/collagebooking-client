import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import loginanimation from "../../../assets/animations/loginanimation.json"
import { useNavigate, useParams } from "react-router-dom";
import useSingleCollage from "../../Hooks/useSingleCollage";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;
const AdmissionForm = () => {
    const {user} = useContext(AuthContext);
    const { id } = useParams();
    const [collage] = useSingleCollage(id);
    // console.log(collage);
    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imagHostingUrl, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imageResponse => {
            if (imageResponse.success) {
                const imgurl = imageResponse.data.display_url;
                const admissionData = {
                    ...data,
                    collage,
                    userEmail: user?.email,
                    candidate_image: imgurl 
                  };
                  console.log(admissionData)
                 fetch('http://localhost:5000/admitCollage',{
                    method:"POST",
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(admissionData)
                 }).then(res => res.json())
                 .then(data => {
                     if(data.message !== "Already Applied"){
                        Swal.fire({
                            icon: 'success',
                            title: 'Apply Successfully',
                        })
                        navigate("/myCollage", { replace: true });
                     }
                 });
                  
            }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
                <div className="text-center lg:text-left">
                    <Lottie animationData={loginanimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md">
                    <div className="card-body">
                        <h1 className="text-3xl font-semibold">Admission Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Name</span>
                                </label>
                                <input {...register("candidateName", { required: true })} type="text" placeholder="Candidate Name" className="input input-bordered" />
                                {errors.candidateName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input {...register("subject", { required: true })} type="text" placeholder="Subject" className="input input-bordered" />
                                {errors.subject && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Email</span>
                                </label>
                                <input {...register("candidateEmail", { required: true })} type="email" placeholder="Candidate email" className="input input-bordered" />
                                {errors.candidateEmail && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Phone Number</span>
                                </label>
                                <input {...register("candidatePhoneNumber", { required: true })} type="text" placeholder="Candidate Phone Number" className="input input-bordered" />
                                {errors.candidatePhoneNumber && <span className="text-red-500">This field is required</span>}
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
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input {...register("cDOB", { required: true })} type="date" placeholder="Candidate Name" className="input input-bordered" />
                                {errors.cDOB && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-xs w-full" />
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-xl">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;