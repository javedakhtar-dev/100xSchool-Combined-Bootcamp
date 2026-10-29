import type { AnalyticsData } from "../../types";

type Props = {
  analyticsData: AnalyticsData;
};

const AnalyticsSection = ({analyticsData}: Props) => {
    return (
        <div className="bg-white rounded-lg p-5 text-sm flex flex-col gap-3">
            <div className="flex justify-between items-center hover:text-sky-700 hover:underline animation-all cursor-pointer">
                <div>Profile viewers</div>   
                <div className="text-xs text-sky-700">{analyticsData.profileViews}</div>   
            </div>
            <div className="flex justify-between items-center hover:text-sky-700 hover:underline animation-all cursor-pointer">
                <div>Post impressions</div>   
                <div className="text-xs text-sky-700">{analyticsData.postImpressions}</div>   
            </div>
        </div>
    )
}

export default AnalyticsSection;