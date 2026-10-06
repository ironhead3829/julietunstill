import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `transition-colors hover:text-blue-300 ${
            isActive ? "text-blue-300" : "text-slate-300"
        }`;

    return (
        <>
            <nav className="w-full border-b border-blue-900 bg-blue-950">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                    <NavLink
                        to="/"
                        className="text-xl font-semibold tracking-tight text-white"
                    >
                        Julie Tunstill
                    </NavLink>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>

                        <NavLink to="/experience" className={linkClass}>
                            Experience
                        </NavLink>

                        <NavLink to="/solutions" className={linkClass}>
                            Solutions
                        </NavLink>

                        <NavLink to="/achievements" className={linkClass}>
                            Achievements
                        </NavLink>

                        <NavLink to="/contact" className={linkClass}>
                            Contact
                        </NavLink>

                        <a
                            href={`${import.meta.env.BASE_URL}Julie_Tunstill_Resume.pdf`}
                            download
                            className="rounded-md border border-blue-400 px-4 py-2 text-blue-300 transition-colors hover:bg-blue-400 hover:text-blue-950"
                        >
                            Resume ↓
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}