import { Route, Routes } from "react-router-dom";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Apply from "./components/Apply";
import Jobs from "./components/jobs";
import ShowJob from "./components/show-job";
import Test from "./components/Test";
import Login from "./components/login";
const App = () => {
    const home = "I am testing his for learn props in test component (Its use for pass data from one component to another one).";
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/apply-online" element={<Apply />} />
                    <Route path="/show-jobs/:id" element={<ShowJob />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/test" element={<Test home={home} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default App;