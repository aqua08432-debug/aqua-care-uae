import * as React from "react";

export interface DialogCompositionContextValue {
    isComposing: boolean;
    setComposing: (val: boolean) => void;
    justEndedComposing: () => boolean;
    markCompositionEnd: () => void;
}

export const DialogCompositionContext = React.createContext<DialogCompositionContextValue>({
    isComposing: false,
    setComposing: () => { },
    justEndedComposing: () => false,
    markCompositionEnd: () => { },
});

export const useDialogComposition = () => React.useContext(DialogCompositionContext);

export function DialogCompositionProvider({ children }: { children: React.ReactNode }) {
    const [isComposing, setComposing] = React.useState(false);
    const compositionEndRef = React.useRef(false);

    const markCompositionEnd = React.useCallback(() => {
        compositionEndRef.current = true;
        setTimeout(() => {
            compositionEndRef.current = false;
        }, 200);
    }, []);

    const justEndedComposing = React.useCallback(() => {
        return compositionEndRef.current;
    }, []);

    const value = React.useMemo(
        () => ({
            isComposing,
            setComposing,
            justEndedComposing,
            markCompositionEnd,
        }),
        [isComposing, justEndedComposing, markCompositionEnd]
    );

    return (
        <DialogCompositionContext.Provider value={value}>
            {children}
        </DialogCompositionContext.Provider>
    );
}
