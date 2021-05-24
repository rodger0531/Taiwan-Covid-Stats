import React from "react";
import Typography from "@material-ui/core/Typography";

const ChartCard = ({ children, title }) => {
  return (
    <>
      <Typography align="center" className="mb-3" variant="h4" component="h2">
        {title}
      </Typography>
      {children}
    </>
  );
};

export default ChartCard;
