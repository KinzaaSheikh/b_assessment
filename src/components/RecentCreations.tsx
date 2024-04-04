'use client'

import Gallery from "./Gallery"
import SearchBar from "./SearchBar"
import Tabs from "./Tabs"

export default function RecentCreations() {
    return(
        <div>
            <h1 className="p-8 text-xl space-x-4">Recent Creations</h1>
            <div className="w-full m-2 p-8 rounded-xl bg-[#232343]">
                <SearchBar />
                <Tabs />
                <Gallery />
            </div>
        </div>
    )
}