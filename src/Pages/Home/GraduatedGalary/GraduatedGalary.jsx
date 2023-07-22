import useAllCollageData from "../../Hooks/useAllCollageData";
import Gallery from 'react-photo-gallery';
import SectionTitle from "../../Shared/SectionTitle";
const GraduatedGalary = () => {
    const [collages] =useAllCollageData();

    const photos = collages.map((college) => ({
        src: college.graduationPicture,
        width: 300, 
        height: 200,
      }));
    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Graduate Gallery"/>
            <Gallery photos={photos} />;
        </div>
    );
};

export default GraduatedGalary;