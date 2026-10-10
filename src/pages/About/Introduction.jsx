import TopBar from "../../components/TopBar/TopBar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Introduction.css";

function Introduction() {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />

            {/* Breadcrumb */}
            <div className="about-breadcrumb">
                <div className="breadcrumb-container">
                    <span>Home</span>
                    <span>/</span>
                    <span>About</span>
                    <span>/</span>
                    <span>Introduction</span>
                </div>
            </div>

            {/* Introduction Content */}
            <main className="introduction-page">

                <h1>Introduction</h1>

                <p>
                    The Lokpal is the first institution of its kind in
                    independent India, established under the Lokpal and
                    Lokayuktas Act, 2013 to inquire and investigate into
                    allegations of corruption against public functionaries
                    who fall within the scope and ambit of the above Act.
                </p>

                <p>
                    The Lokpal of India is committed to address concerns and
                    aspirations of the citizens of India for clean governance.
                    It shall make all efforts within its jurisdiction to serve
                    the public interest and shall endeavor to use the powers
                    vested in it to eradicate corruption in public life.
                </p>

                <p>
                    India is a signatory to the United Nations Convention
                    against Corruption. The commitment of the Government to
                    provide clean and responsive governance is reflected in
                    passing of the legislation and creation of the body of
                    Lokpal, to contain and punish acts of corruption.
                </p>

                <p>
                    This is what the then Secretary General of United Nations
                    has had to say on the adoption of the resolution by the
                    Member States:
                </p>

                <p className="quote">
                    "Corruption is an insidious plague that has a wide range
                    of corrosive effects on societies. It undermines democracy
                    and the rule of law, leads to violations of human rights,
                    distorts markets, erodes the quality of life and allows
                    organized crime, terrorism and other threats to human
                    security to flourish."
                </p>

            </main>

            <Footer />
        </>
    );
}

export default Introduction;