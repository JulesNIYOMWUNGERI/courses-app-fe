import { RouterProvider } from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageProviderContext";
import router from "./routes";

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
