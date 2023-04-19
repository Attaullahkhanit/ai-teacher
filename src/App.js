import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import NoPageFind from './Pages/NoPage/NoPageFind';
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/SignIn/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import CreateAndPlay from './Pages/Dashboard/Create&Play/CreateAndPlay';
import Downloads from './Pages/Dashboard/Downloads/Downloads';
import Profile from './Pages/Dashboard/Profile/Profile';
import ProUpgrade from './Pages/Dashboard/ProUpgrade/ProUpgrade';
import ToolIdea from './Pages/Dashboard/ToolIdea/ToolIdea';
import LessonPlan from './Pages/Dashboard/Create&Play/LessonPlan';
import PDFGenerator from './Components/pdf/generate-pdf';


function App() {
  return (
    <>
    

      {/* Routing */}
        <Routes>
            {/* main pages */}
            <Route path='/' element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPageFind />} />

            {/* main sub pages */}
            

            {/* Sign in */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/createplay' element={<CreateAndPlay />} />
            <Route path='/downloads' element={<Downloads />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/upgrade' element={<ProUpgrade />} />
            <Route path='/toolidea' element={<ToolIdea />} />
            <Route path='/lessonplan' element={<LessonPlan />} />

            <Route path='/pdfgenerator' element={<PDFGenerator />} />
            
        </Routes>
        
    </>
  );
}

export default App;
