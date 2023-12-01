import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SideBar = ({ children }: { children: React.ReactNode }) =>
{
    const [toggle, setToggle] = useState(false);
    console.log(toggle);
    return (
        <div className="relative">
            <div className='flex'>
                <div className={`bg-[#001529] ${toggle ? 'w-[8%]' : 'w-[15%]'} h-[100vh]`}>
                   <div className="flex flex-col justify-between items-center">
                        <div>
                            <div className='flex justify-center items-center flex-col py-5'>
                                <Link
                                    href={"/"}
                                    className='link link-body py-[0.6rem] text-center w-[9rem] rounded-md flex items-center justify-center gap-2'>
                                    <Image
                                        src={"https://img.icons8.com/?size=512&id=d0J4Xl8jnuC7&format=png"}
                                        width={30}
                                        height={30}
                                        priority={true}
                                        alt='Dashboard'
                                    />
                                    <h4 className={`${toggle ? 'hidden' : 'block'}`}>Dashoard</h4>
                                </Link>
                                <Link
                                    href={"/Users"}
                                    className='link link-body py-[0.6rem] text-center w-[9rem] rounded-md flex items-center justify-center gap-2'>
                                    <Image
                                        src={"https://img.icons8.com/?size=512&id=108652&format=png"}
                                        width={40}
                                        height={40}
                                        priority={true}
                                        alt='user'
                                    />
                                    <h4 className={`${toggle? 'hidden':'block'}`}>All Users</h4>
                                    
                                </Link>
                            </div>
                        </div>
                        {toggle ? <button className="text-center w-32 h-10 text-2xl font-bold " onClick={() => setToggle(false)}>{">"}</button> : <button className="text-center w-32 h-10 text-2xl font-bold " onClick={() => setToggle(true)}>{"<"}</button>}
                   </div>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default SideBar;
