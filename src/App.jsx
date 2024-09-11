import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Login from "./pages/Login";
import About from "./pages/About";
import Content from "./pages/Contact";
import Profile from "./pages/Profile";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MyAppointments from "./pages/MyAppointments";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/teachers/:speciality" element={<Teacher />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointment" element={<MyAppointments />} />
        <Route path="/appointment/:teachId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
