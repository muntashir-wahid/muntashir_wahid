import React from "react";

const SectionWrapper = ({ className, children }) => {
  return (
    <section className={`container mx-auto py-16 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
