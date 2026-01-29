import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/ReapRewards';
import Faabl from './pages/Faabl';
import CaretakerApp from './pages/CaretakerApp';
import Borough from './pages/Borough';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/reap-rewards" element={<CaseStudy />} />
          <Route path="/faabl" element={<Faabl />} />
          <Route path="/caretaker-app" element={<CaretakerApp />} />
          <Route path="/borough" element={<Borough />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
