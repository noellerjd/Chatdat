import React, { useState, useEffect } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
} from "@mui/material/";
// import { resultKeyNameFromField } from "@apollo/client/utilities";
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

  console.log(searchResult);

  return (
    <Stack>
      {searchResult.slice(0, 8).map((result) => {
        return (
          <Card spacing={2} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {result.data.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" size="small">
                Do you want to chat dat
              </Button>
            </CardActions>
          </Card>
        );
      })}
      ;
    </Stack>
  );
}
