import React from "react";
import "./style/tailwind.css";
import MainRoute from "./Route";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <MainRoute />
    </RecoilRoot>
  );
}
