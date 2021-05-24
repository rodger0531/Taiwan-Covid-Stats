import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const ChartCard = ({ children, title }) => {
  return (
    <Card>
      <CardContent>
        <Typography align="center" className="mb-3" variant="h4" component="h2">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
