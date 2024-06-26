import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_yvmt8mt",
                "first_template",
                refForm.current,
                "YgOePJAZrc71GPMrL"
            )
            .then(
                () => {
                    alert("Message sucessfully sent")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )

    }

    return (
        <>
            <Loader type="pacman" />
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in projects suitable for juniors with JavaScript and React skills. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Patrik Kusnir,
                    <br />
                    Moscow district, Nakhabino
                    <br />
                    Russia, <br />
                    <span>patrikusnir1@gmail.com</span>


                </div>
                <div className="map-wrap">
                    <MapContainer center={[55.841735, 37.184734]} zoom={10} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[55.841735, 37.184734]}>
                            <Popup>
                                Here I live for now
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </>
    )
}

export default Contact