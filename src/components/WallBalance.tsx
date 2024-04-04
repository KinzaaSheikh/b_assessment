'use client'
export default function WallBalance() {
    return(
        <div className="p-4 m-4 rounded-lg" style={{
            backgroundImage: `url('/graphic.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="p-4 h-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1>Wallet Balance</h1>
                <p>9,758.41</p>
                <p>Birble AI Tokens</p>
            </div>
        </div>
    )
}