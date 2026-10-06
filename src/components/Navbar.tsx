import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `transition-colors hover:text-rose-300 ${
            isActive ? "text-rose-300" : "text-stone-300"
        }`;

    return (
        <>
            <nav className="w-full border-b border-rose-900 bg-rose-950">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                    <NavLink
                        to="/"
                        className="text-xl font-semibold tracking-tight text-white"
                    >
                        Julie Tunstill
                    </NavLink>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <NavLink to="/" end className={linkClass}>Home</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/experience" className={linkClass}>Experience</NavLink>
                        <NavLink to="/solutions" className={linkClass}>Solutions</NavLink>
                        <NavLink to="/achievements" className={linkClass}>Achievements</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        <a
                            href={`${import.meta.env.BASE_URL}Julie_Tunstill_Resume.pdf`}
                            download
                            className="rounded-md border border-rose-400 px-4 py-2 text-rose-300 transition-colors hover:bg-rose-400 hover:text-rose-950"
                        >
                            Resume ↓
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
