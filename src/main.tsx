import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Egitim } from "./Components/Egitim.tsx"
import {Beceriler} from "./Components/Beceriler.tsx"

import { Projeler } from "./Components/Projeler.tsx";
import Baslik from "./Components/Baslik.tsx";
import { SSS } from "./Components/SSS.tsx";
import { SayfaSonu } from "./Components/SayfaSonu.tsx";
import { Alinti} from "./Components/Alinti.tsx";
import { Vizyon } from "./Components/Vizyon.tsx";
import {Kimdir} from "./Components/Kimdir.tsx";
import {Iletisim} from "./Components/Iletisim.tsx";

createRoot(document.getElementById("root")!).render(
  <div>
    <StrictMode>
      <Baslik/>
      <Kimdir/>

      <div className="grid lg:grid-cols-3">  
        
          <Egitim/>

          
          <div className="lg: col-span-2">
            <Projeler/>
          </div>
      </div>

      <div className="lg:grid grid-cols-3 ">
        <Vizyon/>
        <Beceriler/>
        <div className="lg:grid grid-rows-2 ">    
          <Iletisim/>  
          <Alinti/>
        </div>
        <SSS/>
      </div>
      <SayfaSonu/>
    </StrictMode>
  </div>
);
