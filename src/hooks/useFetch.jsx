import { useEffect, useState } from "react"


export const useFetch = (url, arr = []) => {
    const [data, setData] = useState(null)

    
  fetch(url, {
    headers: {
        "apiKey": "f2c0bdbf-4664-4433-b770-a2f3c0d19e44",
        "AppToken": "Etc."
    }
})


    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, arr)

    return { data }
}