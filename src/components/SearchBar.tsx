'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
    return(
        <div className="flex items-center">
            <Input type="search" placeholder="Search" className="text-gray-400 bg-[#34345B]"/>
            <Button type="submit" className="rounded-full px-4 bg-gradient-to-r from-[#AD07C9] to-[#6335E5] text-white">Search</Button>
        </div>
    )
}