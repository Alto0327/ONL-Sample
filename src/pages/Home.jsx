import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import sample from "../assets/sample.jpg";
import Slideshow from "../components/Slideshow";
import AthleteModal from "../components/AthleteModal";

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [wpContent, setWpContent] = useState(null);

    useEffect(() => {
        fetch('https://ninjaobstaclesportsontario.ca/wp-json/wp/v2/pages?slug=home')
          .then(res => res.json())
          .then(data => {
            if (data && data[0]) setWpContent(data[0].content.rendered);
          })
          .catch(console.error);
    }, []);

    return (
        <>
            <Nav />
            <main className="hero">
                <Slideshow />
                <h1>Ninja Obstacle Sport Ontario</h1>
                <button>Get Involved</button>
            </main>

            <section className="AboutUs">
                <h2>About us</h2>
                {wpContent ? (
                  <div dangerouslySetInnerHTML={{ __html: wpContent }} />
                ) : (
                  <p>Loading about us...</p>
                )}
                <p><a href="#">More Info About us -&gt;</a></p>
            </section>

            <section className="EventAndAthlete">
                <div className="homeEvents">
                    <h2>Upcoming Events</h2>
                    <ul>
                        <li>TBD</li>
                        <li>TBD</li>
                        <li>TBD</li>
                    </ul>
                </div>

                <div className="Athlete" onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
                    <h2>Featured Athlete</h2>
                    <div className="AthleteInfo-Container">
                        <img src={sample} alt="Aldo" style={{ width: "200px", height: "200px" }} />
                        <section className="AthleteInfo">
                            <h5>Name: Aldo Fonseca</h5>
                            <p>
                                Gym: <a href="https://www.hamilton.thewarriorfactory.com/index.cfm?Page=Home">
                                The warrior Factory - Hamilton</a>
                            </p>
                            <p>Division: Amateur Males</p>
                            <p>See more info</p>
                        </section>
                    </div>
                </div>
            </section>

            <footer>
                <p>Sample Page in the workss</p>
            </footer>

            {showModal && <AthleteModal onClose={() => setShowModal(false)} />}
        </>
    );
}
