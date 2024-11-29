import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import NewsletterPage from './pages/Home/Newsletter';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';
import TrekDetailsLayout from './pages/trekDetails/TrekDetailsLayout';
// import Banner from "./pages/Home/Banner";
import LandingPageLayout from "./pages/Home/LandingPageLayout"


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/" 
          element={
            <>
            <LandingPageLayout />
            {/* <Banner />
              <Section01 />
              <Section02 />
              <Section03 />
              <FAQSection />
              <TrekOfTheYear />
              <ReviewSection />
              <VideoBlog /> */}
      
          
            </>
          }
        />

        <Route path="/overView" element={<TrekDetailsLayout />} />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      {/* <NewsletterPage /> */}
        <Footer />
    </BrowserRouter>
  );
}

export default App;
