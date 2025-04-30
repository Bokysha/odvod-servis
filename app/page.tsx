"use client"

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import PlumbingIcon from "@mui/icons-material/Plumbing"
import BuildIcon from "@mui/icons-material/Build"
import HandymanIcon from "@mui/icons-material/Handyman"
import Link from "next/link"
import Image from "next/image"

const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: "3rem",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}))

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}))

export default function Home() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"))
  const features = [
    {
      icon: <PlumbingIcon fontSize="inherit" />,
      title: "Profesionalne usluge",
      description:
        "Pružamo vrhunske vodoinstalaterske usluge sa garancijom kvaliteta i dugogodišnjim iskustvom.",
    },
    {
      icon: <BuildIcon fontSize="inherit" />,
      title: "Hitne intervencije",
      description:
        "Dostupni smo 24/7 za hitne intervencije. Brzo i efikasno rešavamo probleme sa vodovodnim instalacijama.",
    },
    {
      icon: <HandymanIcon fontSize="inherit" />,
      title: "Pouzdanost",
      description:
        "Koristimo kvalitetne materijale i savremene alate za sve vrste vodoinstalaterskih radova.",
    },
  ]

  return (
    <>
      <Box
        sx={{
          minHeight: isMobile ? "30vh" : "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          padding: isMobile ? 4 : 15,
        }}
      >
        <Image
          src="/imgs/glavna_slika.png"
          alt="Vodoinstalaterska pozadina"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          style={{ zIndex: -1 }}
        />
        {!isMobile && (
          <Container maxWidth="md">
            <Box sx={{ mt: 35, ml: 35 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/contact"
                sx={{ mt: 2, px: 10, py: 3, borderRadius: 10 }}
              >
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{ fontWeight: 700 }}
                >
                  KONTAKTIRAJTE NAS
                </Typography>
              </Button>
            </Box>
          </Container>
        )}
      </Box>
      {isMobile && (
        <Container
          maxWidth="md"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
            sx={{ mt: 2, px: 4, py: 3, borderRadius: 10 }}
          >
            <Typography component="h1" sx={{ fontWeight: 700 }}>
              KONTAKTIRAJTE NAS
            </Typography>
          </Button>
        </Container>
      )}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Zašto izabrati nas?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid key={index} sx={{ width: "100%" }}>
              <FeatureCard elevation={2}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Potrebna vam je pomoć?
          </Typography>
          <Typography variant="body1" paragraph>
            Naš tim stručnjaka je tu da vam pomogne sa svim vodoinstalaterskim
            potrebama.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/services"
            sx={{ mr: 2 }}
          >
            Naše usluge
          </Button>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
          >
            Pozovite nas
          </Button>
        </Box>
      </Container>
    </>
  )
}
