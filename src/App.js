import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Router />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
