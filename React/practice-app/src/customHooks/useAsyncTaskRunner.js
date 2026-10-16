import { useRef, useState, useCallback } from "react"
export default function useAsyncTaskRunner({ limit = 2 } = {}) {
   const [isRunning, setRunning] = useState(false);
   const [result, setResult] = useState([])
   const queueRef = useRef([])
   const countRef = useRef(0)


}


function MinimumRoomRequiredProblem(arr) {
   let start = arr.map(el => el[0].sort((a,b) => a[0]-b[0]));
   let end = arr.map(el => el[1].sort((a,b) => a[1] - b[1]));
   let i = 0; 
   let j = 0;
   let room = 0;
   let max = 0;
   while(i < start.length) {
      if(start[i] < end[j]) {
         room++;
         i++
      } else {
         room--;
         j++;
      }

      max = Math.max(max, room)
   }

   return max

}