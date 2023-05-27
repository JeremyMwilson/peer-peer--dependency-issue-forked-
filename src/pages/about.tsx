import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styles from "./about.module.css";
import SidebarMenu from "../components/SidebarMenu";

function About() {
  const [count, setCount] = useState(0);
  return (
      <SidebarMenu>
      <h1>Welcome to the About Page</h1>
      <p>This is the About page content.</p>
    </SidebarMenu>
  );
}
export default About;
