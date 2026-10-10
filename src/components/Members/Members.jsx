import { useState } from "react";
import "./Members.css";

import hcp from "../../assets/Members/hcp.png";
import hmswamy from "../../assets/Members/hmswamy.png";
import snjy from "../../assets/Members/snjy.png";
import hmschan from "../../assets/Members/hmschan.png";
import hmrra from "../../assets/Members/hmrra.jpg";
import hmpankaj from "../../assets/Members/hmpankaj.jpg";
import hmat from "../../assets/Members/hmat.jpg";

function Members() {

    const [selectedMember, setSelectedMember] = useState(null);

    const members = [

        {
            id: 1,
            name: "Shri Justice L. Narayana Swamy",
            role: "Judicial Member",
            image: hmswamy,
            description: `Born on 01-07-1959 in Bhadravati, Shimoga District of Karnataka, he completed his LLB from National Law College, Shimoga and LLM from Mysore University. Enrolled as an Advocate during the year 1987 and practiced in the High Court and worked as High Court Govt. Pleader from 1995 to 1999. Appointed as an Additional Judge of the High Court of Karnataka on 04-07-2007 and permanent Judge on 17-04-2009 and the Acting Chief Justice from 17.01.2019 to 09.05.2019. Transferred to Himachal Pradesh High Court as Chief Justice in 2019 and demitted office in 2021. Appointed as Chairperson, State Human Right Commission, Karnataka on 25th November, 2023 till 11th March, 2024. Appointed as Hon'ble Judicial Member, Lokpal of India on 12th March 2024.`
        },

        {
            id: 2,
            name: "Shri Justice Sanjay Yadav",
            role: "Judicial Member",
            image: snjy,
            description: `Born on 26th June 1959. Enrolled as an Advocate on 25 August 1986. He practiced on Civil, Revenue and Constitutional side in the Madhya Pradesh High Court. He was appointed Deputy Advocate General of Madhya Pradesh. He was elevated as Additional Judge of Madhya Pradesh High Court on 2nd March 2007 and Permanent Judge on 15 January 2010. He served as Acting Chief Justice of Madhya Pradesh High Court and was later transferred as Senior Judge of Allahabad High Court. He was appointed Chief Justice of Allahabad High Court in June 2021. He has been appointed as Hon'ble Judicial Member, Lokpal on 12th March, 2024.`
        },

        {
            id: 3,
            name: "Shri Sushil Chandra",
            role: "Member",
            image: hmschan,
            description: `Born on 15th May, 1957. He completed his Bachelor of Engineering (Civil) from IIT, Roorkee and L.L.B. from DAV College, Dehradun. He started his career in Indian Engineering Service and later joined Indian Revenue Service in 1980. He became Chairman, CBDT and later Election Commissioner of India. He was elevated as the 24th Chief Election Commissioner of India on 13th April, 2021. He has been appointed as Hon'ble Member, Lokpal of India on 12th March, 2024.`
        },

        {
            id: 4,
            name: "Shri Justice Ritu Raj Awasthi",
            role: "Judicial Member",
            image: hmrra,
            description: `Hon'ble Shri Justice Ritu Raj Awasthi born on 03rd July, 1960. He graduated in Law from Lucknow University in 1986 and enrolled as an Advocate in 1987. After practising for more than 20 years, he was elevated as High Court Judge in 2009. He was elevated as Chief Justice of Karnataka High Court on 11th October, 2021. He was appointed Chairman of 22nd Law Commission of India on 09th November, 2022 and continued till 26th March, 2024. He has been appointed as Hon'ble Judicial Member, Lokpal on 27th March, 2024.`
        },

        {
            id: 5,
            name: "Shri Pankaj Kumar",
            role: "Member",
            image: hmpankaj,
            description: `Born on 06th May, 1962, Shri Pankaj Kumar did his B.Tech in Civil Engineering (Gold Medalist) from IIT Kanpur and Masters of Business Administration (Public Policy and Management) from the University of Ljubljana, Slovenia. He was selected for the Indian Administrative Service in 1986 and allotted Gujarat Cadre. He served in numerous administrative positions and was appointed Chief Secretary to the Government of Gujarat w.e.f. 31.08.2021. He superannuated on 31.01.2023. He has been appointed as Hon'ble Member of Lokpal of India on 27th March 2024.`
        },

        {
            id: 6,
            name: "Shri Ajay Tirkey",
            role: "Member",
            image: hmat,
            description: `Born on 17th December, 1963, Shri Ajay Tirkey is a graduate in English (Hons.) from St. Xavier's College, Ranchi; an MBA from B.I.T. Mesra, Ranchi; and holds a diploma in PGPPM from IIM Bangalore. He was selected in the Indian Administrative Service in 1987 and allotted to the Madhya Pradesh Cadre. He served in several senior administrative positions including Secretary, Department of Land Resources. He has been appointed as Member of Lokpal on 27th March, 2024.`
        }

    ];

    const chairperson = {
        id: 0,
        name: "Shri Justice Ajay Manikrao Khanwilkar",
        role: "Chairperson, Lokpal",
        image: hcp,
        description: `Shri Justice Ajay Manikrao Khanwilkar born on 30th July 1957. He did B.Com from Mulund College of Commerce, Mumbai and L.L.B. from K.C. Law College, Mumbai. He was enrolled as Advocate on 10th February, 1982. He was appointed as Additional Judge of the Bombay High Court on 29th March, 2000 and confirmed as permanent Judge on 8th April, 2002. He was appointed as Chief Justice of the High Court of Himachal Pradesh on 4th April, 2013. Thereafter, he was appointed as Chief Justice of Madhya Pradesh High Court on 24th November, 2013. He was elevated as the Judge of the Supreme Court of India and assumed charge on May 13, 2016 and continued till 29th July, 2022. He was appointed as the Chairperson, Lokpal of India on 10th March 2024.`
    };

    return (
        <section className="members-section">

            <h2>Members of Lokpal</h2>

            {/* Chairperson */}

            <div className="chairperson-card member-card">

                <img
                    src={chairperson.image}
                    alt={chairperson.name}
                />

                <div className="member-info">

                    <h3>{chairperson.role}</h3>

                    <p>{chairperson.name}</p>

                    <button
                        onClick={() => setSelectedMember(chairperson)}
                    >
                        More Info →
                    </button>

                </div>

            </div>


            {/* Members */}

            <div className="members-grid">

                {members.map((member) => (

                    <div
                        className="member-card"
                        key={member.id}
                    >

                        <img
                            src={member.image}
                            alt={member.name}
                        />

                        <div className="member-info">

                            <h3>{member.role}</h3>

                            <p>{member.name}</p>

                            <button
                                onClick={() => setSelectedMember(member)}
                            >
                                More Info →
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* More Info Modal */}

            {selectedMember && (

                <div
                    className="member-overlay"
                    onClick={() => setSelectedMember(null)}
                >

                    <div
                        className="member-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="close-btn"
                            onClick={() => setSelectedMember(null)}
                        >
                            ×
                        </button>

                        <div className="modal-top">

                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="modal-image"
                            />

                            <div className="modal-heading">

                                <h2>
                                    {selectedMember.name}
                                </h2>

                                <h3>
                                    {selectedMember.role}
                                </h3>

                            </div>

                        </div>

                        <hr />

                        <h4>Brief Profile</h4>

                        <p className="modal-description">
                            {selectedMember.description}
                        </p>

                    </div>

                </div>

            )}

        </section>
    );
}

export default Members;