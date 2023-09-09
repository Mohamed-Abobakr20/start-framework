import React from "react";
import Header from "../Header/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NotFound({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="notFound vh-100">
        <div className="container pt-5 text-center">
          <Header header="Page Not Found!" />
        </div>
      </div>
    </HelmetProvider>
  );
}
