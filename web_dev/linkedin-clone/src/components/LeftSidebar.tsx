import { useState } from "react";
import AnalyticsSection from "./AnalyticsSection";
import ProfileSection from "./ProfileSection";

const LeftSidebar = () => {
    const [profileData, setProfileData ] = useState({
        bgImgURL: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        profileImgURL: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
        profileName: "Javed",
        profileShortDescription: "Full-stack Developer | MERN Stack Specialist",
        profileLocation: "Greater Delhi Area"
    })

    const [analyticsData, setAnalyticsData] = useState({
        profileViews: 7,
        postImpressions: 1
    })

    return (
        <div className="flex flex-col gap-3">
            <ProfileSection profileData={profileData}/>
            <AnalyticsSection analyticsData={analyticsData} />
        </div>
    )
}

export default LeftSidebar;