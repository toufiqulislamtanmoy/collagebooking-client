
import { Link } from "react-router-dom";
import useGetUser from "../Hooks/useGetUser";

const UserProfile = () => {
    const [singleuser] = useGetUser();
    console.log(singleuser)
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="card lg:card-side bg-base-100 mx-3">
                <figure className="lg:w-3/12"><img src={singleuser?.profile_pic} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleuser?.name}</h2>
                    <h2><span className="font-bold">Email:</span> {singleuser?.email}</h2>
                    <h2><span className="font-bold">Address:</span> {singleuser?.address ? singleuser?.address : "Address Not Set"}</h2>
                    <h2><span className="font-bold">University:</span> {singleuser?.university ? singleuser?.university : "University Not Set"}</h2>
                    <div className="card-actions justify-end">
                        <Link to="/updateProfile" className="btn btn-primary">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;