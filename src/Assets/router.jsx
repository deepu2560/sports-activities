import { Route, Routes } from "react-router-dom";
import { CyclingPage } from "./pages/cycling";
import { AquaticPage } from "./pages/aquatics";
import { ArmouryPage } from "./pages/armoury";
import { FeaturePage } from "./pages/feature";
import { EquestrianePage } from "./pages/equestrian";
import { ExtremePage } from "./pages/extreme";
import { GolfPage } from "./pages/golf";
import { GymnastPage } from "./pages/gymnastics";
import { LakeSeaPage } from "./pages/lakeSea";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FeaturePage />} />
      <Route path="/armoury" element={<ArmouryPage />} />
      <Route path="/aquatic" element={<AquaticPage />} />
      <Route path="/cycle" element={<CyclingPage />} />
      <Route path="/equestrian" element={<EquestrianePage />} />
      <Route path="/extreme" element={<ExtremePage />} />
      <Route path="/golf-sport" element={<GolfPage />} />
      <Route path="/gymnast" element={<GymnastPage />} />
      <Route path="/lake" element={<LakeSeaPage />} />
    </Routes>
  );
};
