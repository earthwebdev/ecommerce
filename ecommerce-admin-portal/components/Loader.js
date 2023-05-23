import { BounceLoader, ClockLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

export const BounceSpinLoader = () => {
    return (
        <BounceLoader color={'#1E3ABA'} speedMultiplier={2} />
    )
}
const Loader = () => {
   
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
        <div className="flex justify-center items-center h-screen">            
            <ClipLoader
                color="#fff"
                loading={true}
                cssOverride={override}
                size={50}
                
            />
        </div>
    </>
  )
}

export default Loader