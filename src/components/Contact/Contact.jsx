import React from "react";
import Header from "../Header/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Input from "../Input/Input";

export default function Contact({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="contact vh-100">
        <div className="container pt-5 text-center">
          <Header header="CONTACT SECTION" />
          <div className="w-75 mx-auto">
            <Input type="text" placeholder="Enter Your Name" />
            <Input type="number" placeholder="Enter Your Age" />
            <Input type="email" placeholder="Enter Your Email" />
            <Input type="password" placeholder="Enter Your Password" />
            <button type="submit" className="btn text-white px-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
