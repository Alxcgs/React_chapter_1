import React from "react";

const Loader = ({ isLoading, children }) => {
  return isLoading ? <div className="loader">Завантаження...</div> : <>{children}</>;
};

export default Loader;