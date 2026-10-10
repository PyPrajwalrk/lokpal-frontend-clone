import "./Efiling.css";

function Efiling() {
    return (
        <div className="efiling-page">

            <div className="efiling-header">
                <h1>e-Filing</h1>
                <p>Online Complaint Filing</p>
            </div>

            <form className="complaint-form">

                {/* Complainant Details */}
                <div className="form-section">
                    <h2>Complainant Details</h2>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                            />
                        </div>

                        <div className="form-group">
                            <label>ID Proof</label>
                            <select>
                                <option>Select ID Proof</option>
                                <option>Aadhaar Card</option>
                                <option>Voter ID</option>
                                <option>Driving Licence</option>
                                <option>Passport</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>ID Proof Number</label>
                            <input
                                type="text"
                                placeholder="Enter ID proof number"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Address</label>
                            <textarea
                                rows="3"
                                placeholder="Enter your complete address"
                            ></textarea>
                        </div>

                    </div>
                </div>


                {/* Complaint Details */}
                <div className="form-section">
                    <h2>Complaint Against Government Person</h2>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Name of Government Person</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Post / Designation</label>
                            <input
                                type="text"
                                placeholder="Enter designation"
                            />
                        </div>

                        <div className="form-group">
                            <label>Department / Office</label>
                            <input
                                type="text"
                                placeholder="Enter department"
                            />
                        </div>

                        <div className="form-group">
                            <label>Reason for Complaint</label>
                            <input
                                type="text"
                                placeholder="Enter reason"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Complaint Summary</label>
                            <textarea
                                rows="4"
                                placeholder="Briefly describe your complaint"
                            ></textarea>
                        </div>

                        <div className="form-group full-width">
                            <label>Allegation / Detailed Complaint</label>
                            <textarea
                                rows="7"
                                placeholder="Enter complete details of the allegation"
                            ></textarea>
                        </div>

                    </div>
                </div>


                <div className="submit-section">
                    <button type="submit">
                        Submit Complaint
                    </button>
                </div>

            </form>

        </div>
    );
}

export default Efiling;