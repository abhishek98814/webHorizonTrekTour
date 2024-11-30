import Banner from "../Home/Banner";
import Section01 from "./Section01";
// import Section02 from "./Section02";
import Section03 from "./section03";
import FAQSection from "./Faq";
import TrekOfTheYear from "./TrekOftheYear";
import ReviewSection from "./Review";
import VideoBlog from "./VideoBlog";

const LandingPageLayout = ()=>{
    return(
        <>
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
        </>
    )
}

export default LandingPageLayout