import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BestSellersAPI from "../../services/bestSellersAPI";
import Sidebar from "../../components/sidebar/sidebar";

function Home() {
  const [topSellers, setTopSellers] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadTopSellers() {
      try {
        const {
          results: { lists },
        } = await BestSellersAPI.fetchTopBestSellers();
        setTopSellers(lists);
      } catch (error) {
        console.error("Error loading top sellers:", error);
      }
    }

    loadTopSellers();
  }, []);

  useEffect(() => {
    async function loadGenres() {
      try {
        const { results } = await BestSellersAPI.fetchGenres();
        setGenres(results.slice(0, 20));
      } catch (error) {
        console.error("Error loading genres:", error);
      }
    }

    loadGenres();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar genres={genres} />
        </Grid>
        <Grid item xs={10}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
