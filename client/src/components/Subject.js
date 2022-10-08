import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../App.css";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material/";
import javascriptBubble from "./images/javascript.png";
import expressBubble from "./images/express.png";
import mongoDbBubble from "./images/mongodb.png";
import nodeJsBubble from "./images/nodejs.png";
import reactBubble from "./images/react.png";

export default function Subject() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const url = "https://www.reddit.com/r/learnjavascript/hot.json";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setSearchResult(data.data.children);
        // console.log(data.data.children);
      } catch (err) {
        console.error(err);
      }
    };
    search();
  }, []);

  return (
    <Grid container id="cardContainer" sx={{ flexGrow: 1 }}>
      {searchResult.slice(0, 8).map((result) => {
        return (
          <Card
            margin="normal"
            spacing={2}
            sx={{ maxWidth: 345 }}
            style={{
              margin: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#232323",
            }}
          >
            <CardMedia
              item
              xs={6}
              md={8}
              component="img"
              alt="javascript"
              height="auto"
              image={javascriptBubble}
            />
            <CardContent>
              <Typography
                style={{ color: "#ead352" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {result.data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.data.selfText}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Skip Dat ❌</Button>
              <Button size="large">Chat Dat ✔</Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
}
