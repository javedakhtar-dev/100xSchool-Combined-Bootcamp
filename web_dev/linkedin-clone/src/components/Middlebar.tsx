import PostGrid from "./PostGrid";
import SearchBox from "./SearchBox";
import WritePost from "./WritePost";

const Middlebar = () => {
    
    return (
        <div className="flex flex-col gap-3">
            <WritePost />
            <PostGrid />
        </div>
    )
}

export default Middlebar;