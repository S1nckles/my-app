import { React, Suspense } from 'react';

export const withSuspense = (Component) => {
    return <Suspense fallback="LOADING >>>>>>>>>>>>>>>">
            <Component />
        </Suspense>
}