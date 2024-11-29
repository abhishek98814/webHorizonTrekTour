import Info01 from "../TripInfo/Info01"
import Info02 from "../TripInfo/Info02"
import FAQ from "./Info03";
import Info4 from "./Info04"
const InfoLayout = () =>{
    return(
        <div>
            <div className="my-2">
        <Info01 />
            </div>
         
            <div className="my-2">
        <Info02 />
            </div>
            <div className="my-2">
            <Info4 />
            </div>
            <div className="my-2">
        <FAQ />
            </div>
        </div>
    )
}

export default InfoLayout