import { useState } from "react";
import SearchBox from "./SearchBox";
import TopbarElement from "./TopbarElement";
import TopbarElementWithDropdown from "./TopbarElementWithDropdown";

const Topbar = () => {
    
    return (
        <div className="bg-white">
            <div className="flex justify-between p-1 max-w-[80vw] m-auto">
                <div className="flex items-center">
                    <div>
                    <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" height={50} width={50} />
                </div>
                <div>
                        <SearchBox searchBoxData={{hasIcon: true, title: "Search"}}/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div >
                        <div className="flex items-center gap-7">
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000"} elementTitle={"Home"}/>
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=GMbrnuht2DLJ&format=png&color=000000"} elementTitle={"Network"}/>
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=7GSs0XLsEg6x&format=png&color=000000"} elementTitle={"Jobs"}/>
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=QxNDCQCA0COh&format=png&color=000000"} elementTitle={"Messaging"}/>
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=11642&format=png&color=000000"} elementTitle={"Notifications"}/>
                            <TopbarElementWithDropdown iconURL={"https://img.icons8.com/?size=100&id=7819&format=png&color=000000"} iconTitle={"Me"}/>
                            <div className="border-1 h-10 border-slate-200"/>
                            <TopbarElementWithDropdown iconURL={"https://img.icons8.com/?size=100&id=8113&format=png&color=000000"} iconTitle={"For Business"}/>
                            <TopbarElement iconURL={"https://img.icons8.com/?size=100&id=sQwWueo7kDHr&format=png&color=000000"} elementTitle={"Premium"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;