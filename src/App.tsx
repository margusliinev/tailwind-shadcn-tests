import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomeLayout, AppLayout, Register, Login, Dashboard, Home, Projects, Tickets, Profile, Users } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                    <Route path='app' element={<AppLayout />}>
                        <Route index element={<Navigate to='dashboard' />} />
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='tickets' element={<Tickets />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='users' element={<Users />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
