import SidebarMenuButton from "./SidebarMenuButton";

export default function Sidebar () {
    return (
        <div className="border-r border-slate-300 h-screen">
            <div className="border-b-1 border-slate-300 p-5 flex justify-between">
                <span className="font-black p-2 bg-sky-400 rounded-lg text-white">Dashboard</span>
                <span className="font-black p-2 bg-sky-400 rounded-full text-white">J</span>
            </div>
            <div className="p-5 flex flex-col gap-5">
                <SidebarMenuButton title="Home" iconURL=""/>
                <SidebarMenuButton title="Webinar" iconURL=""/>
                <SidebarMenuButton title="Billing" iconURL=""/>
                <SidebarMenuButton title="User Management" iconURL=""/>
                <SidebarMenuButton title="Settings" iconURL=""/>
            </div>
        </div>
    )
}