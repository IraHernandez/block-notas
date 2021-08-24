import './index.css';
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'firebase/auth';
import { firebaseConfig } from "./firebase";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={"Cargando..."}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);