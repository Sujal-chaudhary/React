/* Method -> 2 for applying Context API */

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
      themeMode: "light",
      darkTheme: () => {},
      lightTheme: () => {},
})

/* yha jab pehli pheli baar humara context bane to usme kya value ho app de skte ho direct yha pe just like above
..... yha aap variables and methods dono de skte ho...

=> Provider bhi hum yhi bana rhe hai...
*/

export const ThemeProvider = ThemeContext.Provider

// we made a custom hook :- now ab hum bas useTheme import karenge..
export default function useTheme(){
    return useContext(ThemeContext)
}