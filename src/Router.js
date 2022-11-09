import {Routes,Route} from 'react-router-dom';
import * as React from 'react';
import FullPageLoadingSpinner from './lottiefileData/FullPageLoadingSpinner/FullPageLoadingSpinner';

const Techfoollolo3dWorld = React.lazy(()=>import ('./pages/Techfoollolo3dWorld'));
const TechfoolloloHomePage = React.lazy(()=>import ('./pages/TechfoolloloHomePage'));
export default function Router(){
    return(
        <div className="router-page">
        <div className="route">
 
        <Routes>
            <Route path="/abouthisfool" 
                element={<React.Suspense fallback={<FullPageLoadingSpinner/>}>
                <TechfoolloloHomePage />
                </React.Suspense>} />
            <Route path="/abouthisfool/3dworld" 
            element={<React.Suspense fallback={<FullPageLoadingSpinner/>}>
            <Techfoollolo3dWorld />
            </React.Suspense>} />
            
        </Routes>

        </div>

        </div>
    )
}