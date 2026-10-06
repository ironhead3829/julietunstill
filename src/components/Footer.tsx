import { FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const tooltipClass =
        "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 " +
        "whitespace-nowrap rounded bg-blue-900 px-2 py-1 text-xs text-blue-100 " +
        "opacity-0 shadow-lg transition-opacity group-hover:opacity-100 " +
        "group-focus-visible:opacity-100";

    const linkClass =
        "group relative inline-flex text-xl transition-colors hover:text-blue-300";

    return (
        <>
            <footer className="w-full border-t border-blue-900 bg-blue-950">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-medium text-slate-200">
                            Julie Tunstill
                        </p>
                        <p>Technology Sales Professional</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href="https://www.linkedin.com/in/julietunstill"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                        >
                            <div className="text-blue-300 transition group-hover:text-blue-200">
                                <FaLinkedin />
                            </div>

                            <span role="tooltip" className={tooltipClass}>
                                LinkedIn
                            </span>
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}Julie_Tunstill_Resume.pdf`}
                            download
                            className={linkClass}
                        >
                            <div className="text-blue-400 transition group-hover:text-blue-300">
                                <HiOutlineDocumentArrowDown />
                            </div>

                            <span role="tooltip" className={tooltipClass}>
                                Download Resume
                            </span>
                        </a>

                        <span className="text-slate-500">
                            © {currentYear} Julie Tunstill
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}