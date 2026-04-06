import Underlinelink from './ui/Underlinelink'
import CurvedLineGSAP from './ui/Curvedlinegsap'
export default function Footer() {
    return (
        <footer className="font-inter flex flex-col h-screen bg-[#052424] text-white py-4">
            {/* Sección de columnas centrada verticalmente */}
            <div className="flex mt-24 justify-center items-end mr-20 flex-col grow">
                <div className="flex gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                        <span className="font-jetbrains text-[0.6rem] tracking-widest font-medium mb-4 uppercase">
                            Technology
                        </span>
                        <div className="flex flex-col gap-2 font-light text-[1.2rem]">
                            <Underlinelink href="#">Homepage</Underlinelink>
                            <Underlinelink href="#">
                                Lab Security <br />
                                System{' '}
                            </Underlinelink>
                            <Underlinelink href="#">The AI Detection</Underlinelink>
                            <Underlinelink href="#">
                                Sensor Efficiency <br />
                                Calculator
                            </Underlinelink>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                        <span className="font-jetbrains text-[0.6rem] tracking-widest font-normal mb-4 uppercase">
                            Company
                        </span>
                        <div className="flex flex-col gap-2 font-light text-[1.2rem]">
                            <Underlinelink href="#">About</Underlinelink>
                            <Underlinelink href="#">Resources</Underlinelink>
                            <Underlinelink href="#">Contact</Underlinelink>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col ml-18 gap-3">
                        <span className="font-jetbrains text-[0.6rem] tracking-widest font-normal mb-4 uppercase">
                            Reach us
                        </span>
                        <div className="flex flex-col gap-2 font-light text-[1.2rem]">
                            <Underlinelink href="#">
                                Ready for your lab of the future?
                            </Underlinelink>

                            <a className="text-[#475e5e]">
                                Connect with our experts today!
                            </a>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity duration-200">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity duration-200">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity duration-200">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright abajo */}
            <div className="mx-12 flex justify-between items-center text-[0.7rem] text-[#475e5e]">
                <p>
                    Copyright Safelab {new Date().getFullYear()} <br />© All Rights
                    Reserved.
                </p>

                <p>
                    Made by{' '}
                    <Underlinelink href="https://github.com/FaureGalliard">
                        Galliard
                    </Underlinelink>
                </p>
            </div>
        </footer>
    )
}
