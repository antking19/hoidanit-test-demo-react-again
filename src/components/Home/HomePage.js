import HomeVideo from "../../assets/video-1920.mp4";

const HomePage = (props) => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={HomeVideo} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <h1 className="title1">There's a better way to ask</h1>
                <h4 className="title2 fw-normal">
                    You don't want to make a boring form. And your audience
                    won't answer one. Create a typeform instead—and make
                    everyone happy.
                </h4>
                <div className="title3">
                    <button className="btn btn-outline-dark">
                        Get's started. It's free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
