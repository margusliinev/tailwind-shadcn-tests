const DesktopSidebar = () => {
    return (
        <aside className='min-h-screen w-72 p-4 border-r block ml-0 '>
            <div className='mt-16'>
                <ul className='grid gap-4'>
                    <li className='flex gap-4 items-center font-semibold text-sm p-2 pl-4 rounded-md hover:bg-emerald-50 group hover:text-emerald-600'>
                        <span className=' text-neutral-500 group-hover:text-emerald-600'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                                />
                            </svg>
                        </span>
                        <p>Dashboard</p>
                    </li>
                    <li className='flex gap-4 items-center font-semibold text-sm p-2 pl-4 rounded-md hover:bg-emerald-50 group hover:text-emerald-600'>
                        <span className='text-neutral-500 group-hover:text-emerald-600'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 '
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                                />
                            </svg>
                        </span>
                        <p>Projects</p>
                    </li>
                    <li className='flex gap-4 items-center font-semibold text-sm p-2 pl-4 rounded-md hover:bg-emerald-50 group hover:text-emerald-600'>
                        <span className='text-neutral-500 group-hover:text-emerald-600'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 '
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z'
                                />
                            </svg>
                        </span>
                        <p>Tickets</p>
                    </li>
                    <li className='flex gap-4 items-center font-semibold text-sm p-2 pl-4 rounded-md hover:bg-emerald-50 group hover:text-emerald-600'>
                        <span className='text-neutral-500 group-hover:text-emerald-600'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 '
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                            </svg>
                        </span>
                        <p>Profile</p>
                    </li>
                    <li className='flex gap-4 items-center font-semibold text-sm p-2 pl-4 rounded-md hover:bg-emerald-50 group hover:text-emerald-600'>
                        <span className='text-neutral-500 group-hover:text-emerald-600'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 '
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                                />
                            </svg>
                        </span>
                        <p>Admin</p>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default DesktopSidebar;
