import Main from "../components/pages/Main";
import Cult from "../components/pages/Culture";
import Economy from "../components/pages/Economy";
import Politic from "../components/pages/Politics";
import Sport from "../components/pages/Sport";
import NotFound from "../components/pages/NotF404";

import Sciense from "../components/pages/Sciense";
import Ancident from "../components/pages/Ancident";


const Routing = [
  { path: "/", element: Main },
  { path: "/Economy", element: Economy },
  { path: "/Sport", element: Sport },

  { path: "/Politic", element: Politic },
  { path: "/Sciense", element: Sciense },
  { path: "/Culture", element: Cult },
  { path: "/Incident", element: Ancident },
  { path: "*", element: NotFound },


];

export default Routing;
