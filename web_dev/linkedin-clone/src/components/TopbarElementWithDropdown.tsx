type TopbarElementWithDropdownProps = {
    iconURL: string,
    iconTitle: string
}

const TopbarElementWithDropdown = (props: TopbarElementWithDropdownProps) => {
    return (
        <div className="flex flex-col items-center">
            <img src={props.iconURL} height={25} width={25} />
            <div className="flex text-xs items-center">
                {props.iconTitle}
                <img src="https://img.icons8.com/?size=100&id=89221&format=png&color=000000" alt="" width={20} height={20}/>
            </div>
        </div>
    )
}

export default TopbarElementWithDropdown;