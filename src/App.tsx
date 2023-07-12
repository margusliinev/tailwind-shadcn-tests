import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RegisterPage, HomeLayout, LoginPage, HomePage } from './pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/Register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
