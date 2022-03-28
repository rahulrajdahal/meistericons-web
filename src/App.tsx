import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { HomePage, HowToUsePage } from "pages";
import { routes } from "utils/routes";
import { getIcons } from "api/fetchIcons";
import { Icon } from "hooks/useSearch";
import Navbar from "components/navbar";
import { FooterContainer } from "containers";

const HomePage = React.lazy(() => import("pages/Home"));
const HowToUsePage = React.lazy(() => import("pages/HowToUse"));

function App() {
  const [version, setVersion] = useState<string>("");
  const [icons, setIcons] = useState<Icon[]>([]);

  const getLatestIcons = async () => {
    const meisterIcons = await getIcons();

    setIcons(Object.entries(meisterIcons.iconNodes));
    setVersion(meisterIcons.version);
  };

  useEffect(() => {
    getLatestIcons();
  }, []);

  if (!icons.length) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar version={version} />
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.HOWTOUSE} element={<HowToUsePage />} />
        </Routes>
      </Suspense>
    */}
      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
