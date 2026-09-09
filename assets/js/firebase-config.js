// Central Firebase configuration for the CRD TOPAP user panel.
// Every page imports `app` from this file instead of keeping its own copy
// of the config, so the project config only needs to be changed in ONE place.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAo5dOK8tsLAmfMY0NqPGEdJAzCPAmHuPY",
  authDomain: "crdtopup-28c33.firebaseapp.com",
  projectId: "crdtopup-28c33",
  storageBucket: "crdtopup-28c33.firebasestorage.app",
  messagingSenderId: "1063459519377",
  appId: "1:1063459519377:web:672876d06a4f9b64c7f830"
};

export const app = initializeApp(firebaseConfig);
