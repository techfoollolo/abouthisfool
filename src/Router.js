import {Routes,Route} from 'react-router-dom';

import TechfoolloloHomePage from './pages/TechfoolloloHomePage';

export default function Router(){
    return(
        <div className="router-page">
        <div className="route">
 
        <Routes>
            <Route path="/abouthisfool" element={<TechfoolloloHomePage />} />
            <Route path="/abouthisfool/3dworld" element={<></>} />
            
        </Routes>

        </div>

        </div>
    )
}