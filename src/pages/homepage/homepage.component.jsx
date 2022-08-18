import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

// functional component because we don't need to use state
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
