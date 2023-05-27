import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Home = React.lazy(() => import("./pages/HomePage"));
const FAQ = React.lazy(() => import("./pages/faq"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const Contact2 = React.lazy(() => import("./pages/contact"));
const PrivateForm = React.lazy(() => import("./pages/privateInsurance"));

const frontendApi = "equipped-jay-85.clerk.accounts.dev";
const clerkPubKey = "pk_test_ZXF1aXBwZWQtamF5LTg1LmNsZXJrLmFjY291bnRzLmRldiQ";
console.log("imported everything App...");

function App() {
  console.log("Rendering App...");

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <SidebarMenu>
          <SignedIn>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact2" element={<Contact2 />} />
              <Route path="/privateInsurance" element={<PrivateForm />} />
            </Routes>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </SidebarMenu>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
