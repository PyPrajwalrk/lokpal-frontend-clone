import { Link } from "react-router-dom";
import "./ComplaintSection.css";

function ComplaintSection() {
    return (
        <section className="complaint-section">

            <h2>Complaint</h2>

            <div className="complaint-list">

                {/* 1. Lodge Complaint */}
                <Link
                    to="/complaint/lodge"
                    className="complaint-card"
                >
                    <div className="complaint-icon">▣</div>

                    <h3>
                        Lodge Online Complaint From Here
                    </h3>
                </Link>


                {/* 2. Case Status */}
                <Link
                    to="/complaint/status"
                    className="complaint-card"
                >
                    <div className="complaint-icon">⌕</div>

                    <h3>
                        Case Status Complaint
                    </h3>
                </Link>


                {/* 3. Complaint Format */}
                <Link
                    to="/complaint/format"
                    className="complaint-card"
                >
                    <div className="complaint-icon">▤</div>

                    <h3>
                        Format for Filing Complaint By Post, By Hand
                    </h3>
                </Link>


                {/* 4. Complaint Instructions */}
                <Link
                    to="/complaint/instruction"
                    className="complaint-card"
                >
                    <div className="complaint-icon">ℹ</div>

                    <h3>
                        Important Instructions to Lodge a Complaint
                    </h3>
                </Link>

            </div>

        </section>
    );
}

export default ComplaintSection;