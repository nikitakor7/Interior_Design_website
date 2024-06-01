import "./faq.css";
import pQuestion from "../images/projectQuestion.jpg";
import eQuestion from "../images/everyQuestion.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export function Faq() {
    const [showQ1, setShowQ1] = useState(false);
    const [showQ2, setShowQ2] = useState(false);
    const [showQ3, setShowQ3] = useState(false);
    const [showQ4, setShowQ4] = useState(false);
    const [showQ5, setShowQ5] = useState(false);
    const [showQ6, setShowQ6] = useState(false);
    const [showQ7, setShowQ7] = useState(false);
    const [showQ8, setShowQ8] = useState(false);
    const [showQ9, setShowQ9] = useState(false);
    const [showQ10, setShowQ10] = useState(false);

    return (
        <div className="faq">
            <div className="faq-header">
                <h1>
                    Faq's<p>Home / Faq</p>
                </h1>
            </div>
            <h1 className="faq-title">Every Question Answered</h1>
            <div className="e-question">
                <div className="ep-questions">
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ1(!showQ1);
                            }}
                        >
                            What is a San Fran Interior Design Service?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ1 ? (
                            <p className="q-content">
                                San Fran Interior Design Service offers end-to-end solutions for designing and furnishing residential and commercial spaces, including consultation, concept development, detailed planning, project management, execution, and styling.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ2(!showQ2);
                            }}
                        >
                            What can I expect during the San Fran design process?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ2 ? (
                            <p className="q-content">
                                The San Fran design process includes a personalized consultation, concept development with mood boards, detailed planning with 3D visualizations, project management, execution, and final styling to ensure your space is perfectly tailored to your needs.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ3(!showQ3);
                            }}
                        >
                            How does San Fran manage project timelines and budgets?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ3 ? (
                            <p className="q-content">
                                San Fran's project management team carefully coordinates every aspect of the design and renovation process, ensuring that all work is completed on time and within the agreed budget, while maintaining high-quality standards.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ4(!showQ4);
                            }}
                        >
                            What kind of support does San Fran offer during the execution phase?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ4 ? (
                            <p className="q-content">
                                During the execution phase, San Fran provides comprehensive support by overseeing construction, coordinating with contractors and suppliers, and managing every detail to ensure a smooth and successful completion of the project.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ5(!showQ5);
                            }}
                        >
                            Can San Fran handle both residential and commercial projects?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ5 ? (
                            <p className="q-content">
                                Absolutely! San Fran has extensive experience in designing and furnishing both residential and commercial spaces, delivering functional and aesthetically pleasing environments that cater to the specific needs of each client.
                            </p>
                        ) : null}
                    </div>
                </div>
                <div className="ep-q-img">
                    <img src={eQuestion} alt="everyquestion"></img>
                </div>
            </div>

            <h1 className="faq-title">Project Related Questions</h1>
            <div className="p-question">
                <div className="ep-q-img">
                    <img src={pQuestion} alt="projectquestion"></img>
                </div>
                <div className="ep-questions">
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ6(!showQ6);
                            }}
                        >
                            How do you handle unexpected changes during a project?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ6 ? (
                            <p className="q-content">
                                We handle unexpected changes with flexibility and transparency, communicating promptly with clients and adjusting plans as needed to ensure the project's success while minimizing disruptions.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ7(!showQ7);
                            }}
                        >
                            Can San Fran work with my existing furniture and decor?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ7 ? (
                            <p className="q-content">
                                Yes, we can incorporate your existing furniture and decor into the new design, blending them seamlessly with new elements to create a harmonious and personalized space.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ8(!showQ8);
                            }}
                        >
                            How does San Fran ensure high-quality standards in their projects?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ8 ? (
                            <p className="q-content">
                                We maintain high-quality standards by using premium materials, employing skilled craftsmen, and conducting thorough inspections at every stage of the project to ensure exceptional results.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ9(!showQ9);
                            }}
                        >
                            What happens if I want to make changes after the project is completed?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ9 ? (
                            <p className="q-content">
                                We offer post-completion support and are happy to assist with any changes or adjustments you wish to make, ensuring your space continues to meet your needs and preferences.
                            </p>
                        ) : null}
                    </div>
                    <div className="ep-q">
                        <p
                            className="q-title"
                            onClick={() => {
                                setShowQ10(!showQ10);
                            }}
                        >
                            How do you incorporate sustainability into your designs?{" "}
                            <IoIosArrowForward />
                        </p>

                        {showQ10 ? (
                            <p className="q-content">
                                We prioritize sustainability by selecting eco-friendly materials, optimizing energy efficiency, and incorporating sustainable practices throughout the design and construction process to minimize environmental impact.
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
