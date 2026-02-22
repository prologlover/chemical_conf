import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import CallForPapers from './pages/CallForPapers';
import ImportantDates from './pages/ImportantDates';
import Program from './pages/Program';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/call-for-papers" element={<CallForPapers />} />
                <Route path="/important-dates" element={<ImportantDates />} />
                <Route path="/program" element={<Program />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default App;
