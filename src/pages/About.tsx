// import profilePhoto from "../assets/me.png";

export default function About() {
    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-6 py-6">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <h1 className="text-3xl font-semibold text-blue-950">
                        About Me
                    </h1>

                    {/* <img
                        src={profilePhoto}
                        alt="Julie Tunstill"
                        className="mx-auto w-64 rounded-xl object-cover shadow-lg md:mx-0 md:w-72"
                    /> */}
                </div>

                <p className="mt-4 text-slate-600">
                    About me goes here
                </p>
            </section>
        </>
    );
}