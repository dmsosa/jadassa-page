import { createContext, useContext, useEffect, useState } from "react";

const GodContext = createContext({
    withGod: true,
    setWithGod: () => {}
});
export function useGod() {
    return useContext(GodContext);
};

function GodProvider({children}) {
    const [ withGod, setWithGod ] = useState(true);

    return (
        <GodContext.Provider value={{withGod, setWithGod}}>
            {children}
        </GodContext.Provider>
    )
};

export default GodProvider;