"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./FadeInSection.module.css"; // adjust the path as necessary

const FadeInSection = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.fadeIn} ${isVisible ? styles.visible : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
