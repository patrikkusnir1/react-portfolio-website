import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faSquareJs,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeoutId)
        };
    }, [])

    return (
        <>
            <div className="container about-page" >
                <div className="text-zone" >
                    <h1 >
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a pharmacist, looking for job in toxicology and quality assessment field.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my professional skills.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family person, husband of a beautiful wife, a chess fanatic,
                        train travel enthusiast, and pharma - obsessed!
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color={"#dd0033"} />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color={"#f06529"} />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color={"#28a4d9"} />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color={"#5ed4f4"} />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faSquareJs} color={"#efd81d"} />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color={"#ec4d28"} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About