import { DesktopSidebar } from '@/components';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

const AppLayout = () => {
    return (
        <>
            <div className='grid md:grid-cols-layout'>
                <DesktopSidebar />
                <div>
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
