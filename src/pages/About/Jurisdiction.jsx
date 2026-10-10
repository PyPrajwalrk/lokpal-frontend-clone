import TopBar from "../../components/TopBar/TopBar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Jurisdiction.css";

function Jurisdiction() {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />

            {/* Breadcrumb */}
            <div className="jurisdiction-breadcrumb">
                <div className="breadcrumb-container">
                    <span>Home</span>
                    <span>/</span>
                    <span>About Us</span>
                    <span>/</span>
                    <span>Jurisdiction and Functions of Lokpal</span>
                </div>
            </div>

            {/* Main Content */}
            <main className="jurisdiction-page">

                <div className="jurisdiction-content">

                    <h1>Jurisdiction and Functions of Lokpal</h1>

                    <div className="title-line"></div>

                    <p>
                        The Lokpal has jurisdiction to inquire into allegations of
                        corruption against anyone who is or has been Prime Minister,
                        or a Minister in the Union government, or a Member of
                        Parliament, as well as officials of the Union Government
                        under Groups A, B, C and D.
                    </p>

                    <p>
                        Also covered are chairpersons, members, officers and
                        directors of any board, corporation, society, trust or
                        autonomous body either established by an Act of Parliament
                        or wholly or partly funded by the Union or State government.
                    </p>

                    <p>
                        It also covers any society or trust or body that receives
                        foreign contribution above ₹10 lakh (approx. US$ 14,300/-
                        as of 2019).
                    </p>

                    <p>
                        A complaint under the Lokpal Act should be in the prescribed
                        form and must pertain to an offence under the Prevention of
                        Corruption Act, 1988 against a public servant. There is no
                        restriction on who can make such a complaint.
                    </p>

                    <p>
                        When a complaint is received, the Lokpal may order a
                        preliminary inquiry by its Inquiry Wing or any other agency,
                        or refer it for investigation by any agency, including CBI,
                        if there is a prima facie case.
                    </p>

                    <p>
                        Before ordering an investigation by an agency, the Lokpal
                        shall call for an explanation from the public servant to
                        determine whether a prima facie case exists.
                    </p>

                    <p>
                        This provision, the Act says, will not interfere with any
                        search and seizure that may be undertaken by the
                        investigating agency.
                    </p>

                    <p>
                        The Lokpal, with respect to Central government servants,
                        shall refer the complaints to the Central Vigilance
                        Commission (CVC). The CVC will send a report to the Lokpal
                        regarding officials falling under Groups A and B; and
                        proceed as per the CVC Act against those in Groups C and D.
                    </p>

                    <p>
                        The Inquiry Wing or any other agency will have to complete
                        its preliminary inquiry and submit a report to the Lokpal
                        within 60 days.
                    </p>

                    <p>
                        It has to seek comments from both the public servant and
                        the "competent authority", before submitting its report.
                    </p>

                    <p>
                        There will be a "competent authority" for each category of
                        public servant as defined under the Act.
                    </p>

                    <p>
                        A Lokpal Bench shall consider the preliminary inquiry
                        report, and after giving an opportunity to the public
                        servant accused of corruption for his/her defence, decide
                        whether it should proceed with the investigation, order a
                        full investigation, direct to start departmental proceedings
                        or close the proceedings.
                    </p>

                    <p>
                        It may also proceed against the complainant if the
                        allegation is false.
                    </p>

                    <p>
                        The preliminary inquiry should normally be completed within
                        90 days of receipt of the complaint.
                    </p>

                    <p>
                        After the investigation, the agency ordered to conduct the
                        probe has to file its investigation report in the court of
                        appropriate jurisdiction, and a copy of the report has to be
                        filed before the Lokpal.
                    </p>

                    <p>
                        A Bench of at least three members will consider the report
                        and may grant sanction to the Prosecution Wing to proceed
                        against the public servant based on the agency's
                        charge-sheet.
                    </p>

                    <p>
                        It may also ask the competent authority to take departmental
                        action or direct the closure of the report.
                    </p>

                    <p>
                        Previously, the authority vested with the power to appoint
                        or dismiss a public servant was the one to grant sanction
                        under Section 197 of the Code of Criminal Procedure and
                        Section 19 of the Prevention of Corruption Act.
                    </p>

                    <p>
                        Now this power will be exercised by the Lokpal.
                    </p>

                    <p>
                        The Lokpal is vested with the power of search and seizure
                        and also powers under the Civil Procedure Code for the
                        purpose of conducting preliminary inquiry & investigation
                        and power of attachment of assets and taking other steps
                        for eradication of corruption.
                    </p>

                    <p>
                        Lokpal will have power of superintendence and direction
                        over any central investigation agency including CBI for
                        cases referred to them by the Lokpal.
                    </p>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Jurisdiction;