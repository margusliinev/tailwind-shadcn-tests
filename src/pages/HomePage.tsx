import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <main className='grid place-content-center w-screen h-screen bg-background text-foreground'>
            <h1 className='text-4xl font-medium'>Welcome to BugTracer!</h1>
            <div className='flex gap-4 justify-self-center mt-4'>
                <Link to={'/login'} className='text-xl bg-primary text-primary-foreground p-2 rounded-md transition-colors hover:bg-primary-hover'>
                    Login
                </Link>
                <Link to={'/register'} className='text-xl bg-primary text-primary-foreground p-2 rounded-md transition-colors hover:bg-primary'>
                    Register
                </Link>
            </div>
        </main>
    );
};

export default HomePage;
