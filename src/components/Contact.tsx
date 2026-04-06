export default function Contact() {
    return (
        <div className=" flex flex-col font-inter  items-center bg-white text-black gap-30">
            <h1 className="  text-[4.8rem] text-[#052424]">Contact Us</h1>
            <div className="flex gap-30">
                <div className="text-[1.1rem] flex flex-col gap-6 ">
                    <h1 className="text-[#052424] text-[1.4rem] font-semibold   items-center gap-2">
                        Reach out to learn more about Safelab, on your <br /> terms:
                    </h1>
                    <div className="flex gap-3">
                        <span className="border-l border border-[#abff02] h-full"></span>
                        <div className="flex"></div>
                        <div className="text-[#cdd3d3] font-medium gap-2 text-[1.4rem] flex flex-col">
                            <a>01</a>
                            <a>02</a>
                            <a>03</a>
                            <a>04</a>
                            <a>05</a>
                        </div>
                        <div className="flex flex-col font-normal  gap-2  text-[1.4rem]">
                            <h1>Schedule a 30-minute meeting with a yard expert</h1>
                            <h1>Schedule a YOS Demo</h1>
                            <h1>Arrange ROI consultation</h1>
                            <h1>Set up a 2-Day Proof of Value on site</h1>
                            <h1>Something else</h1>
                        </div>
                    </div>
                </div>
                <div className="text-[1.1rem] flex flex-col gap-6 ">
                    <h1 className="text-[#052424] text-[2rem] flex items-center">
                        Tell us a bit about you:
                        <div className="flex gap-2 ml-30">
                            <span className="block w-4 h-4 rounded-full bg-[#abff02]"></span>
                            <span className="block w-4 h-4 rounded-full bg-[#cdd3d3]"></span>
                        </div>
                    </h1>
                    <p className="text-[#052424]">
                        Full Name*
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full"
                        />
                    </p>

                    <p className="text-[#052424]">
                        Role or position *
                        <input
                            type="text"
                            placeholder="Project manager"
                            className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full"
                        />
                    </p>

                    <p className="text-[#052424]">
                        Phone Number
                        <input
                            type="tel"
                            placeholder="+1 234 567 890"
                            className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full"
                        />
                    </p>
                    <p className="text-[#052424]">
                        Email
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full"
                        />
                    </p>
                    <p className="text-[#052424]">
                        Company Name
                        <input
                            type="text"
                            placeholder="Acme"
                            className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full"
                        />
                    </p>
                    <p className="text-[#052424] mb-1">How Can We Help?</p>
                    <select
                        defaultValue=""
                        className="bg-transparent text-black placeholder-gray-400 py-1 border-b border-[#cdd3d3] outline-none w-full cursor-pointer">
                        <option
                            value=""
                            disabled>
                            Select options
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
