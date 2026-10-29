import type { SerachBoxData } from "../../types";

type Props = {
    searchBoxData: SerachBoxData;
}
const SearchBox = ({searchBoxData}: Props) => {
    return (
        <div className="border border-slate-400 rounded-full flex items-center px-3 py-1 gap-3 min-w-sm">
            {searchBoxData.hasIcon && <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" width={15} />}
            <input type="text" placeholder={searchBoxData.title} className="text-gray-600 w-full" />
        </div>
    )
}

export default SearchBox;