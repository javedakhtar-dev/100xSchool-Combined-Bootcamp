export default function ProfileCard () {
    return (
        <div className="rounded-lg shadow-lg border border-slate-300 bg-white flex flex-col justify-center items-center gap-5 px-5 py-10 w-xs mt-[-80]">
            <div className="rounded-xl h-20 w-20 bg-black"></div>
            <div className="font-black text-xl">Javed Akhtar</div>
            <div className="text-center">
                <div className="">contact.javedak@gmail.com</div>
                <div className="">+91 99999 99999</div>
            </div>
                <div className="">New Delhi, India</div>
        </div>
    )
}