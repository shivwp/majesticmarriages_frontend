import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Packages } from "./pages/Packages";
import { Portfolio } from "./pages/Portfolio";
import { Booking } from "./pages/Booking";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "packages", Component: Packages },
      { path: "portfolio", Component: Portfolio },
      { path: "booking", Component: Booking },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "*", Component: NotFound },
    ],
  },
]);