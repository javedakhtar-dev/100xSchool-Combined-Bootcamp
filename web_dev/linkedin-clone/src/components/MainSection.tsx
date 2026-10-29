import LeftSidebar from "./LeftSidebar";
import Middlebar from "./Middlebar";
import RightSidebar from "./RightSidebar";

const MainSection = () => {
    return (
        <div className="max-w-[80vw] m-auto grid grid-cols-9 gap-6 mt-5">
            <div className="col-span-2"><LeftSidebar /></div>
            <div className="col-span-4"><Middlebar /></div>
            <div className="col-span-3"><RightSidebar /></div>
        </div>
    )
}

export default MainSection;