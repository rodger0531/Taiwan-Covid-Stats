import React from "react";
import { Card, CardActionArea, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  paper: {
    backgroundColor: ({ size }) => (size === "large" ? blue[700] : "inherit"),
    height: "30%",
  },
});

const StatsCard = ({ name, value, size = "base" }) => {
  const styleClass = useStyles({ size });
  const cardSize = {
    base: {
      cardClass: "min-w-60 min-h-40 mx-2 my-5",
      title: "text-base ml-5",
      content: "h2",
    },
    large: {
      cardClass: "min-w-96 min-h-60 mx-5 my-5",
      title: "text-2xl ml-10 mb-3 text-white",
      content: "h1",
    },
  };

  return (
    <Card className={cardSize[size].cardClass}>
      <CardActionArea className="h-full flex flex-col justify-start">
        <Paper
          elevation={0}
          className={`${styleClass.paper} w-full flex items-end`}
          square
        >
          <Typography className={cardSize[size].title}>{name}</Typography>
        </Paper>
        <Typography
          variant={cardSize[size].content}
          component="h2"
          className="flex justify-center mt-3"
        >
          {value}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default StatsCard;
