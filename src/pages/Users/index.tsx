import SideBar from '@/components/Layout/SideBar/SideBar';
import React, { ReactNode } from 'react';

const index = () => {
    return (
        <div>
            All users page
        </div>
    );
};

export default index;

index.getLayout = function getLayout(page: ReactNode)
{
    return <SideBar>{page}</SideBar>;
};