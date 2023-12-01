import SideBar from "@/components/Layout/SideBar/SideBar";
import { ReactNode } from "react";


export default function Home() {
  return (
   <main>
    <div>Home</div>
   </main>
  )
}

Home.getLayout = function getLayout(page: ReactNode)
{
  return <SideBar>{page}</SideBar>;
};
