import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/HomePage"));
const FAQ = React.lazy(() => import("./pages/faq"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const PrivateForm = React.lazy(() => import("./pages/privateInsurance"));

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API || "";
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log("imported everything App...");

function App() {
  console.log("Rendering App...");

  return (
    <ClerkProvider frontendApi={frontendApi || ""}>
      <BrowserRouter>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/private-insurance" element={<PrivateForm />} />
          </Routes>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
