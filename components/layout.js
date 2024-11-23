import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-row h-screen w-full">
            <NavBar />
            <main className="flex-1 w-full h-full bg-black">{children}</main>
        </div>
    )
}