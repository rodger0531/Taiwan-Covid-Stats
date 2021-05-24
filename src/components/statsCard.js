import React from "react";
import { Card, CardContent, CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const StatsCard = ({ name, value, size = "base" }) => {
  const cardSize = {
    base: {
      cardClass: "min-w-60 min-h-40 mx-2 my-5",
      title: "text-base",
      content: "h2",
    },
    large: {
      cardClass: "min-w-96 min-h-60 mx-5 my-5 text-center",
      title: "text-xl",
      content: "h1",
    },
  };

  return (
    <Card className={cardSize[size].cardClass}>
      <CardActionArea className="h-full">
        <CardContent>
          <Typography
            className={cardSize[size].title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography variant={cardSize[size].content} component="h2">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StatsCard;
