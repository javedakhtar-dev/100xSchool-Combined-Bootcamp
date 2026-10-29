interface propsTypes {
    title: string,
    iconURL: string
}

export default function SidebarMenuButton (props: propsTypes) {
    return (
        <div className="border border-slate-300 rounded-lg p-2 hover:bg-sky-300">
            <div className="font-md ">{props.title}</div>
            <div>{props.iconURL}</div>
        </div>
    )
}