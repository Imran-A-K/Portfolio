import { useEffect, useState } from "react";

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");
    useEffect(()=>{
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
           if(userPref){
            let check = userPref === "dark" ? "dark" : "light"
            setMode(check);
            if(check==="dark"){
                document.documentElement.classList.add("dark")
            }
            else{
                document.documentElement.classList.remove("dark")
            }
           }
           else{
            let check = mediaQuery.matches ? "dark" : "light";
            setMode(check);
            window.localStorage.setItem("theme", check);
            if(check==="dark"){
                document.documentElement.classList.add("dark")
            }
            else{
                document.documentElement.classList.remove("dark")
            }
           } 
        }
        handleChange()
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    },[])
    useEffect(()=>{
        if(mode==="dark"){
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
        else if(mode==="light"){
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    },[mode])

  return [mode,setMode]
}

export default useThemeSwitcher

// import { useEffect, useState } from "react";

// const useThemeSwitcher = () => {
//   const preferDarkQuery = "(prefer-color-scheme: dark)";
//   const [mode, setMode] = useState("");

//   useEffect(() => {
//     const handleChange = (matches) => {
//       const userPref = window.localStorage.getItem("theme");
//       const check = userPref || (matches ? "dark" : "light");
//       setMode(check);
//       if (check === "dark") {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     };

//     if (typeof window !== "undefined") {
//       const mediaQuery = window.matchMedia(preferDarkQuery);
//       handleChange(mediaQuery.matches);
//       mediaQuery.addEventListener("change", () =>
//         handleChange(mediaQuery.matches)
//       );
//       return () =>
//         mediaQuery.removeEventListener("change", () =>
//           handleChange(mediaQuery.matches)
//         );
//     }
//   }, []);

//   useEffect(() => {
//     if (mode === "dark") {
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return [mode, setMode];
// };

// export default useThemeSwitcher;

