import { useState } from "react";
import "./LatestInformation.css";

function LatestInformation() {

    const [activeTab, setActiveTab] = useState("News");

    const newsData = [
        {
            date: "30 Sep 2026",
            title: "Lokpal of India Conducts an awareness programme"
        },
        {
            date: "28 Sep 2026",
            title: "Lokpal of India releases latest information"
        },
        {
            date: "25 Sep 2026",
            title: "Important update from Lokpal of India"
        }
    ];

    const notificationData = [
        {
            date: "29 Sep 2026",
            title: "Important notification regarding Lokpal activities"
        },
        {
            date: "26 Sep 2026",
            title: "Notification regarding administrative matters"
        },
        {
            date: "20 Sep 2026",
            title: "Latest notification issued by Lokpal of India"
        }
    ];

    const vacancyData = [
        {
            date: "27 Sep 2026",
            title: "Inviting applications for Consultant posts"
        },
        {
            date: "22 Sep 2026",
            title: "Recruitment information regarding various posts"
        },
        {
            date: "18 Sep 2026",
            title: "Vacancy notification issued by Lokpal of India"
        }
    ];

    return (
        <section className="latest-information">

            <h2>Latest Information</h2>

            <div className="latest-tabs">

                <button onClick={() => setActiveTab("News")}>
                    News
                </button>

                <button onClick={() => setActiveTab("Notification")}>
                    Notification
                </button>

                <button onClick={() => setActiveTab("Vacancy Circular")}>
                    Vacancy Circular
                </button>

            </div>


            <div className="latest-list">

                {activeTab === "News" &&
                    newsData.map((news) => (
                        <div className="news-item" key={news.date}>

                            <span className="news-arrow">
                                ▶
                            </span>

                            <span className="news-date">
                                {news.date}
                            </span>

                            <span className="news-title">
                                {news.title}
                            </span>

                        </div>
                    ))
                }


                {activeTab === "Notification" &&
                    notificationData.map((notification) => (
                        <div className="news-item" key={notification.date}>

                            <span className="news-arrow">
                                ▶
                            </span>

                            <span className="news-date">
                                {notification.date}
                            </span>

                            <span className="news-title">
                                {notification.title}
                            </span>

                        </div>
                    ))
                }


                {activeTab === "Vacancy Circular" &&
                    vacancyData.map((vacancy) => (
                        <div className="news-item" key={vacancy.date}>

                            <span className="news-arrow">
                                ▶
                            </span>

                            <span className="news-date">
                                {vacancy.date}
                            </span>

                            <span className="news-title">
                                {vacancy.title}
                            </span>

                        </div>
                    ))
                }

            </div>


            <div className="latest-buttons">

                <button>View More</button>

                <button>Archive</button>

            </div>

        </section>
    );
}

export default LatestInformation;