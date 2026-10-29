type TopbarElementProps = {
    iconURL: string,
    elementTitle: string
}

const TopbarElement = (props: TopbarElementProps) => {
    return (
        <div className="flex flex-col items-center cursor-pointer text-slate-600 hover:text-slate-900 transition-all">
            <img src={props.iconURL} width={25}/>
            <div className="text-xs">{props.elementTitle}</div>
        </div>
    )
}

export default TopbarElement;