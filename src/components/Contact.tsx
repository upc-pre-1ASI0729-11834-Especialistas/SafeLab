export default function Contact() {
    return (
        <div className="flex flex-col items-center bg-white text-black font-inter px-4 md:px-8 lg:px-16 py-12">
            {/* TITLE */}
            <h1 className="text-[#052424] text-xl md:text-5xl lg:text-6xl text-center leading-tight">
                Contact Us
            </h1>

            {/* CONTENT */}
            <div className="w-full max-w-6xl mt-12 flex flex-col lg:flex-row gap-12">
                {/* LEFT */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-[#052424] text-lg md:text-2xl font-semibold">
                        Reach out to learn more about Safelab, on your terms:
                    </h2>

                    <div className="flex gap-4">
                        {/* LINE */}
                        <div className="w-[2px] bg-[#abff02]" />

                        {/* NUMBERS */}
                        <div className="text-[#cdd3d3] font-medium flex flex-col gap-2 text-base md:text-lg">
                            <span>01</span>
                            <span>02</span>
                            <span>03</span>
                            <span>04</span>
                            <span>05</span>
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col gap-2 text-base md:text-lg">
                            <p>Schedule a 30-minute meeting with a yard expert</p>
                            <p>Schedule a YOS Demo</p>
                            <p>Arrange ROI consultation</p>
                            <p>Set up a 2-Day Proof of Value on site</p>
                            <p>Something else</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="text-[#052424] text-xl md:text-2xl">
                            Tell us a bit about you:
                        </h2>

                        <div className="flex gap-2">
                            <span className="block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#abff02]"></span>
                            <span className="block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#cdd3d3]"></span>
                        </div>
                    </div>

                    {/* INPUTS */}
                    <div className="flex flex-col gap-5 text-sm md:text-base">
                        <label className="flex flex-col gap-1 text-[#052424]">
                            Full Name*
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-[#052424]">
                            Role or position *
                            <input
                                type="text"
                                placeholder="Project manager"
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-[#052424]">
                            Phone Number
                            <input
                                type="tel"
                                placeholder="+1 234 567 890"
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-[#052424]">
                            Email
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-[#052424]">
                            Company Name
                            <input
                                type="text"
                                placeholder="Acme"
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1"
                            />
                        </label>

                        <label className="flex flex-col gap-1 text-[#052424]">
                            How Can We Help?
                            <select
                                defaultValue=""
                                className="bg-transparent border-b border-[#cdd3d3] outline-none py-1 cursor-pointer">
                                <option
                                    value=""
                                    disabled>
                                    Select options
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
