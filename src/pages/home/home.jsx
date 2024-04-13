import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

import BestSellersAPI from "../../services/bestSellersAPI";
import logo from "../../bsfinder_logo.png";
import Sidebar from "../../components/sidebar/sidebar";
import LinkButton from "../../components/linkButton/linkButton";

function Home() {
  const [topSellers, setTopSellers] = useState([]);
  const [genres, setGenres] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    async function loadTopSellers() {
      try {
        const {
          results: { lists },
        } = await BestSellersAPI.fetchTopBestSellers();
        setTopSellers(lists.slice(0, 5));
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
        setGenres(results.slice(0, 50));
      } catch (error) {
        console.error("Error loading genres:", error);
      }
    }

    loadGenres();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Sidebar genres={genres} />
        </Grid>
        <Grid item sm={9}>
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "20%", height: "auto" }}
            />
          </Box>
          <Grid container direction="row" sm={12}>
            <Typography variant="h5" color="text.primary">
              Choose Your Next Favorite Bestseller Books!
            </Typography>
          </Grid>
          <Grid container direction="row" sm={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Check out the latest New York Times best-selling books
            </Typography>
          </Grid>
          <Grid direction="row" spacing={2}>
            {topSellers.map((seller) => (
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
                    <Grid item sm={2.4}>
                      <Card
                        sx={{ width: "100%", height: 440, position: "relative" }}
                        variant="outlined"
                      >
                        <Chip
                          label={i + 1}
                          variant="outlined"
                          sx={{
                            position: "absolute",
                            top: "61%",
                            left: "5%",
                            color: theme.palette.ochre.main,
                          }}
                        />
                        <CardMedia
                          sx={{ height: 250 }}
                          image={book.book_image}
                          title={book.title}
                        />
                        <CardContent sx={{ height: "23%", paddingLeft: "30%" }}>
                          <Typography
                            variant="button"
                            component="div"
                            align="left"
                            style={{
                              color: theme.palette.ochre.dark,
                            }}
                          >
                            {book.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            align="left"
                          >
                            by {book.author}
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          <LinkButton
                            style={{
                              color: theme.palette.ochre.light,
                              backgroundColor: theme.palette.ochre.darkContrast,
                            }}
                            url={book.amazon_product_url}
                            buttonText="buy"
                          />
                        </CardActions>
                      </Card>
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
