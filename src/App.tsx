import { Navbar } from "@components/navbar/Navbar";
import { DashboardView } from "@views/dashboard";
import * as React from "react";
import './styles.scss';

function App() {
  return (
    <>
      <Navbar />
      <DashboardView />
    </>
  );
}

export default App;
