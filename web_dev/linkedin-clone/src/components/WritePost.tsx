import SearchBox from "./SearchBox";

const WritePost = () => {
    const searchBoxData = {
        hasIcon: false,
        title: "Search for post"
    }

    return (
        <div className="flex flex-col gap-3 bg-white p-5 rounded-lg">
            <div>
                <SearchBox searchBoxData={searchBoxData}/>
            </div>
            <div className="flex justify-around">
                <div className="flex items-center"><img src="https://img.icons8.com/?size=100&id=111348&format=png&color=000000" alt="" width={30}/>Video</div>
                <div className="flex items-center"><img src="https://img.icons8.com/?size=100&id=112856&format=png&color=000000" alt="" width={30}/>Photo</div>
                <div className="flex items-center"><img src="https://img.icons8.com/?size=100&id=WUuJQc2FTZ7x&format=png&color=000000" alt="" width={30}/>Write article</div>
            </div>
        </div>
    )
}

export default WritePost;