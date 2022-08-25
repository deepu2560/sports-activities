import { Route, Routes } from "react-router-dom";
import { CyclingPage } from "./pages/cycling";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CyclingPage />} />
    </Routes>
  );
};
