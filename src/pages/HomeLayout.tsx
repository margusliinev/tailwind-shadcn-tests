import { DesktopSidebar } from '@/components';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='flex'>
            <DesktopSidebar />
            <Outlet />
        </div>
    );
};

export default HomeLayout;
