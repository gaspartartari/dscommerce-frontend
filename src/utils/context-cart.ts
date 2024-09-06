import { createContext } from "react";


// Definir o tipo do contexto para o estado global
export type ContextCartCount = {
    contextCartCount: number,
    setContextCartCount: (contextCartCount: number) => void;
}

// criar o contexto para o estado global
export const ContextCartCount = createContext<ContextCartCount>({
    contextCartCount: 0,
    setContextCartCount: () => {}
})