'use client'

export default function Tabs() {
    return (
        <div className="my-8 w-full flex">
           <div className="justify-around ">
                <a href="#" className="p-4 px-8 bg-white text-[#09032F] rounded-full ">Images</a>
                <a href="#" className="p-4">Music</a>
                <a href="#" className="p-4">Video</a>
                <a href="#" className="p-4">Campaign</a>
                <a href="#" className="p-4">Code</a>
           </div>
        </div>
    )
}