// import { create } from 'zustand';

// const useAgeStore = create((set) => ({
//   count: 0,
// increase:()=>set((state)=>({count:state.count+1}))
// }));
// export default useAgeStore;


// import { create } from "zustand";
// const agestore=create((set)=>({
//     count:0,
//     increase:()=>set(state=>({count:state.count+1})),
//     decrease:()=>set(state=>({count:state.count-1})),
//     increasebygivennum:(num)=>set(state=>({count:state.count+num}))
// }))
// export default agestore;

import { create } from "zustand";
const Agestore=create(set=>({
    count:0,
    increase:()=>set(olddata=>({count:olddata.count+1}))
}))
export default Agestore