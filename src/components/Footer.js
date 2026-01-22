'use client'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="w-full shadow-xl p-[15px] z-50 bg-[var(--bg)] text-[var(--text)] border-t border-[#7042f861]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaGithub />
                            <a href="https://github.com/Atif007cr7" target="_blank" className="text-[15px] ml-[6px]">Github</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/mohd-ansari-atif-56512a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-[15px] ml-[6px]">LinkedIn</a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <a href="https://www.instagram.com/ansari_mohd_atif?igsh=MWgwcjJ5MzM1NXpubg%3D%3D&utm_source=qr" target="_blank" className="text-[15px] ml-[6px]">Instagram</a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">codewithatif@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Ansari Mohd Atif 2024 Inc. All rights reserved
                </div>
            </div>
        </footer>
    )
}
