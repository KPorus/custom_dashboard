import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SideBar = ({ children }: { children: React.ReactNode }) =>
{
    const [toggle, setToggle] = useState(false);

    console.log(toggle);
    return (
        <div className='relative flex'>
            <div className={`flex transition-all bg-[#001529] ${toggle ? "w-[8%]" : "w-[15%]"} h-[100vh] justify-center`}>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex justify-center items-center flex-col py-5'>
                        <Link
                            href={"/"}
                            className={`link link-body py-[0.6rem] text-center ${toggle ? "w-[3rem]" : "w-[9rem]"
                                } rounded-md flex items-center justify-center gap-2`}>
                            <Image
                                src={
                                    "https://img.icons8.com/?size=512&id=d0J4Xl8jnuC7&format=png"
                                }
                                width={30}
                                height={30}
                                priority={true}
                                alt='Dashboard'
                            />
                            <h4 className={`${toggle ? "hidden" : "block"}`}>Dashoard</h4>
                        </Link>
                        <Link
                            href={"/Users"}
                            className={`link link-body py-[0.6rem] text-center ${toggle ? " w-[3rem]" : "w-[9rem]"
                                } rounded-md flex items-center justify-center gap-2`}>
                            <Image
                                src={
                                    "https://img.icons8.com/?size=512&id=108652&format=png"
                                }
                                width={40}
                                height={40}
                                priority={true}
                                alt='user'
                            />
                            <h4 className={`${toggle ? "hidden" : "block"}`}>
                                All Users
                            </h4>
                        </Link>
                    </div>
                    <button
                        className={`text-center ${toggle ? "w-[3rem]" : "w-[9rem]"} p-2 flex items-center justify-center text-2xl font-bold bg-[#1f3f5c]`}
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? ">" : "<"}
                    </button>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default SideBar;
