import { useState } from "react";
import Agestore from "./Store/store";
const Dummy=()=>{
    const {count}=Agestore();
    return(
        <div className="">{count}</div>
    )
}
export default Dummy;