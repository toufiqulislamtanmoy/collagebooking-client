
const TopSection = () => {
    return (
        <div className="mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/Mk1P0PX/pang-yuhao-kd5cxw-ZOK4-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'cover' }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,80C672,64,768,32,864,26.7C960,21,1056,43,1152,96C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="text-center space-y-3">
                <h1 className=" text-xl md:text-3xl lg:text-5xl">Build your future with the perfect college</h1>
                <p>Believe you can and you are halfway there." - Theodore Roosevelt</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    );
};

export default TopSection;