import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Section01 from './pages/Home/Section01';
// import Section02 from './pages/Home/Section02';
import Section03 from './pages/Home/Section03';
import FAQSection from './pages/Home/Faq';
import TrekOfTheYear from './pages/Home/TrekOftheYear';
import ReviewSection from './pages/Home/Review';
import VideoBlog from './pages/Home/VideoBlog';
import NewsletterPage from './pages/Home/Newsletter';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';
import Detail01 from './pages/trekDetails/Details01';
import TrekDetailsLayout from './pages/trekDetails/TrekDetailsLayout';
import Banner from "./pages/Home/Banner";
import { useEffect } from 'react';
import axios from "axios";


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/" 
          element={
            <>
            <Banner />
              <Section01 />
              {/* <Section02 /> */}
              <Section03 />
              <FAQSection />
              <TrekOfTheYear />
              <ReviewSection />
              <VideoBlog />
      
          
            </>
          }
        />

        <Route path="/overView" element={<TrekDetailsLayout />} />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <NewsletterPage />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
