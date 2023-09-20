import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search results for :
          <span style={{ color: "#f31503" }}> {searchTerm} </span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
