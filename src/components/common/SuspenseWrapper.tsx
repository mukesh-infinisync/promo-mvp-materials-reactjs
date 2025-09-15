import { Suspense } from "react";
import LoadingFallback from "../error/LoadingFallback";


type PropsType = {
    children: React.ReactNode;
}

const SuspenseWrapper: React.FC<PropsType> = ({ children }) => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            {children}
        </Suspense>
    );
}

export default SuspenseWrapper; 