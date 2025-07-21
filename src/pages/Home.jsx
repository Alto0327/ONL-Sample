import { useState } from "react";
import Nav from "../components/Nav";
import sample from "../assets/sample.jpg";
import Slideshow from "../components/Slideshow";
import AthleteModal from "../components/AthleteModal";

export default function Home() {
    const [showModal, setShowModal] = useState(false);

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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda suscipit amet, eaque velit quo vero dolore inventore id odit eius consequatur error sapiente, sed necessitatibus vitae animi sunt laboriosam voluptatum, cumque sequi. Animi magni minima molestias molestiae laborum exercitationem, quae obcaecati, culpa itaque doloremque suscipit nostrum qui omnis, eaque consequatur.</p>
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
                <p>Sample Page in the works</p>
            </footer>

            {showModal && <AthleteModal onClose={() => setShowModal(false)} />}
        </>
    );
}
