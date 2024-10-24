import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Pages/Page';

function App() {
    return (
        <div className='min-h-screen bg-[#18181b]'>
        <Router>
            <Routes>
                <Route path="/" element={<Page/>} />
            </Routes>
        </Router>
        </div>
    );
}

export default App; 