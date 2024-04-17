import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

import hero from "../../hero.png";
import BestSellersAPI from "../../services/bestSellersAPI";
import Sidebar from "../../components/sidebar/sidebar";
import BookCard from "../../components/bookCard/bookCard";
import Hero from "../../components/hero/hero";
import BSLogo from "../../components/BSLogo/bslogo";

const GENRES_NUM = 50;
const BEST_SELLERS_GENRES_NUM = 5;

function Home() {
  const [topSellers, setTopSellers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [notification, setNotification] = useState({
    is_open: false,
    message: "",
  });

  useEffect(() => {
    async function loadTopSellers() {
      try {
        const {
          results: { lists },
        } = await BestSellersAPI.fetchTopBestSellers();
        setTopSellers(lists.slice(0, BEST_SELLERS_GENRES_NUM));
      } catch (error) {
        setNotification({
          is_open: true,
          message:
            "Looks like you requested a lot of books!  \
            We're taking a short break to catch up. Try refreshing  \
            the page in a few seconds.",
        });
      }
    }

    loadTopSellers();
  }, []);

  useEffect(() => {
    async function loadGenres() {
      try {
        const { results } = await BestSellersAPI.fetchGenres();
        setGenres(results.slice(0, GENRES_NUM));
      } catch (error) {
        setNotification({
          is_open: true,
          message:
            "Looks like you requested a lot of genres!  \
            We're taking a short break to catch up. Try refreshing  \
            the page in a few seconds.",
        });
      }
    }

    loadGenres();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Snackbar
        open={notification.is_open}
        autoHideDuration={5 * 1000}
        onClose={() => {
          setNotification({ is_open: false, message: "" });
        }}
        message={notification.message}
      />
      <BSLogo />
      <Hero
        heroImage={hero}
        headline="Choose Your Next
            Favorite Bestseller Books!"
        subtitle="Check out the latest New York Times best-selling books"
      />
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Sidebar genres={genres} />
        </Grid>
        <Grid item sm={9}>
          <Grid container direction="row" spacing={2}>
            {topSellers.map((seller, i) => (
              <Grid
                container
                direction="row"
                spacing={2}
                sx={{
                  marginTop: "4px",
                }}
              >
                <Grid
                  container
                  item
                  sx={{
                    justifyContent: "center",
                    marginTop: "16px",
                  }}
                >
                  <Typography variant="h6" color="text.primary" align="center">
                    {seller.list_name}
                  </Typography>
                </Grid>
                <Grid container item spacing={2}>
                  {seller.books.map((book, i) => (
                    <Grid item sm={2.3}>
                      <BookCard
                        key={book.author}
                        labelNumber={i}
                        title={book.title}
                        author={book.author}
                        bookImage={book.book_image}
                        url={book.amazon_product_url}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
