import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

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

const imageMap = {
  learnjavascript: javascriptBubble,
  reactjs: reactBubble,
  expressjs: expressBubble,
  mongodb: mongoDbBubble,
  node: nodeJsBubble,
};

export default function Subject() {
  const [searchResult, setSearchResult] = useState([]);

  const search = async () => {
    const urls = [
      { url: "https://www.reddit.com/r/learnjavascript/hot.json" },
      { url: "https://www.reddit.com/r/reactjs/hot.json" },
      { url: "https://www.reddit.com/r/expressjs/hot.json" },
      { url: "https://www.reddit.com/r/node/hot.json" },
      { url: "https://www.reddit.com/r/mongodb/hot.json" },
    ];

    const result = await Promise.all(
      urls.map((url) => fetch(url.url).then((res) => res.json()))
    );
    const aggregateResults = result
      .map((item) => {
        return item.data.children.map((i) => i.data);
      })
      .reduce((acc, val) => acc.concat(val), []);

    const randomResults = [];

    for (let i = 0; i < 10; i++) {
      randomResults.push(
        aggregateResults[Math.floor(Math.random() * aggregateResults.length)]
      );
    }
    setSearchResult(randomResults);
  };

  useEffect(() => {
    search();
  }, []);

  if (!searchResult.length) {
    return <>No Results</>;
  }

  return (
    <Grid container id="cardContainer" sx={{ flexGrow: 1 }}>
      {searchResult.map((result, index) => {
        return (
          <>
            <Card
              id="resultCard"
              key={`${index} ${result.title}`}
              margin="normal"
              spacing={2}
              sx={{ maxWidth: 300 }}
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
                xs={6}
                md={8}
                component="img"
                alt="javascript"
                id="cardImage"
                image={imageMap[result.subreddit]}
              />
              <CardContent>
                <Typography
                  style={{ color: "#ead352" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <a id="card-title" href={result.url} target="blank">
                    {result.title}
                  </a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.selfText}
                </Typography>
              </CardContent>
              <div id="button-container">
                <h3 style={{ color: "#ead352" }} id="chatDat">
                  Chat Dat?
                </h3>
                <CardActions>
                  <Button size="large" key={result.title}>
                    <FontAwesomeIcon id="xmark" className="svg" icon={faX} />
                  </Button>
                  <Button size="large">
                    <FontAwesomeIcon
                      id="checkmark"
                      className="svg"
                      icon={faCheck}
                    />
                  </Button>
                </CardActions>
              </div>
            </Card>
          </>
        );
      })}
    </Grid>
  );
}
