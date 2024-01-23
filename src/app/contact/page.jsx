"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '45011447',
          formId: '6155649e-77f0-49a3-b921-ba0c76425222',
          target: '#hubspotForm',
        });
      }
    });

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      
      <div id="hubspotForm"></div>
    </div>
  );
};