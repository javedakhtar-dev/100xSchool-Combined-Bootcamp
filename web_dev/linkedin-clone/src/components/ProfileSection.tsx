import type { ProfileData } from "../../types";

type props = {
    profileData: ProfileData
}

const ProfileSection = ({profileData}: props) => {
    return (
        <div className="bg-white rounded-lg text-xs">
            <div className="h-20 overflow-hidden">
                <img src={profileData.bgImgURL} alt="Profile Background" className="rounded-t-lg"/>
            </div>
            <div className="p-5">
                <img src={profileData.profileImgURL} alt="" className="border rounded-full h-15 w-15 mt-[-35] z-100 bg-white absolute"/>
                <div className="mt-8 font-black text-xl">
                  {profileData.profileName} 
                </div>
                <div>
                    {profileData.profileShortDescription}
                </div>
                <div>
                {profileData.profileLocation}
            </div>
            </div>
        </div>
    )
}

export default ProfileSection;