
import "./HowToFileComplaint.css";

function HowToFileComplaint() {
    return (
        <section className="how-to-file">
            <h2>How to File Complaint</h2>

            <video controls width="100%" preload="metadata" playsInline>
                <source
                    src="/video/LOKPAL_Final_14_Jan2024-.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}

export default HowToFileComplaint;
