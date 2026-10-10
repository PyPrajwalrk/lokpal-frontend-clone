import "./ComplaintSection.css"

function ComplaintSection() {

    const complaints = [
        {
            title: "Lodge Online Complaint From Here",
             icon: "▣"
        },
        {
            title: "Case Status Complaint",
             icon: "⌕"
        },
        {
            title: "Format for Filing Complaint By Post, By Hand"
            , icon: "▤"
        },
        {
            title: "Important Instructions to Lodge a Complaint"
            ,  icon: "ⓘ"
        }
    ];

    return (
        <section className="complaint-section">

            <h2>Complaint</h2>

            <div className="complaint-list">
                {complaints.map((complaint, index) => (
                    <div className="complaint-card" key={index} 
                    onClick={()=>alert(complaint.title)}>
                     <div className="complaint-icon">
                        {complaint.icon}
                     </div>
                        <h3>{complaint.title}</h3>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default ComplaintSection;