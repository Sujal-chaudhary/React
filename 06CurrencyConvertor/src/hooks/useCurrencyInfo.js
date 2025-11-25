// Builidng a custom hooks and these custom hooks can use the already built-in hooks :-

import { useEffect , useState} from "react"

function useCurrrencyInfo(currency){
    const [data ,setData] = useState({}) // state variable to store the fetched data
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
)
.then((res) => res.json()) // string converted to json format
.then((res) => setData(res[currency])) // setting the data to the state variable

},[currency]) 
     console.log(data);
     return data; // returning the data to the component which is using this custom hook.
    
}

export default useCurrrencyInfo; 

