'use client'
export default function Dashboard() {
    return(
        <div className="flex p-12 m-4 justify-between" style={{
            backgroundImage: `url('/Dashboard_bg.png')`,
            height: '17rem',
            width: '45rem'
        }}>
            <div>
                <h1 className="text-3xl">Dashboard</h1>
                <p className="text-sm font-thin">Mon 22 Jan 2024</p>
            </div>
            <div className="relative w-full flex justify-between items-end text-xl">
                <h1>Welcome back, Mima</h1>
                <label >
                    <input type="checkbox" className="right-0 bottom-0 w-full h-full appearance-none peer rounded-md" />
                    <span className="flex items-end flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6">
                    <span className="peer-checked:text-black text-sm">Upgrade</span>
                    <span className="text-gray-800 text-sm">Pro Plan</span>
                    </span>
                </label>
            </div>
        </div>
    )
}