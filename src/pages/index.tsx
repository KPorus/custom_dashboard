import { ReactNode } from "react";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("@/components/Layout/SideBar/SideBar"))

export default function Home() {
  return (
   <main>
    <div className="white">Home</div>
   </main>
  )
}

Home.getLayout = function getLayout(page: ReactNode)
{
  return <SideBar>{page}</SideBar>;
};
