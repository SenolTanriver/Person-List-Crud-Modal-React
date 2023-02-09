import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { useState } from "react";
import PersonListCrud from "./pages/PersonListCrud";


const App = () => {

  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout selectedCar={selectedCar} setSelectedCar={setSelectedCar}/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="personListCrud" element={<PersonListCrud/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
