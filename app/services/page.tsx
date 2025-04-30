"use client"

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  Button,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import PlumbingIcon from "@mui/icons-material/Plumbing"
import BathtubIcon from "@mui/icons-material/Bathtub"
import WaterDamageIcon from "@mui/icons-material/WaterDamage"
import WaterIcon from "@mui/icons-material/Water"
import ConstructionIcon from "@mui/icons-material/Construction"
import Slider from "react-slick"

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
}

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#0c6194",
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 0),
  marginBottom: theme.spacing(2),
}))

const ServiceCard = styled(Card)(() => ({
  height: "640px",
  display: "flex",
  my: 12,
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}))

const ServiceIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  fontSize: "3rem",
}))

export default function ServicesPage() {
  const services = [
    {
      title: "Odgušenje kanalizacije",
      description:
        "Brzo i efikasno odgušenje svih vrsta kanalizacionih odvoda sa najsavremenijom opremom.",
      icon: <WaterIcon fontSize="inherit" />,
      image: "/imgs/odgusenje-odvoda.jpg",
    },
    {
      title: "Popravka vodovodnih instalacija",
      description:
        "Popravka i zamena vodovodnih cevi, ventila, slavina i ostalih elemenata vodovodnog sistema.",
      icon: <PlumbingIcon fontSize="inherit" />,
      image: "/imgs/popravka.jpg",
    },
    {
      title: "Instalacija sanitarija",
      description:
        "Instalacija i zamena toaleta, umivaonika, tuševa, kada i druge sanitarije.",
      icon: <BathtubIcon fontSize="inherit" />,
      image: "/imgs/sanitarije.jpg",
    },
    {
      title: "Detekcija kvara/zapusenja",
      description:
        "Profesionalna detekcija curenja vode sa najsavremenijom opremom i brzo rešavanje problema.",
      icon: <WaterDamageIcon fontSize="inherit" />,
      image: "/imgs/detekcija.jpg",
    },
    {
      title: "Renoviranje kupatila",
      description:
        "Kompletno renoviranje kupatila, od projektovanja do realizacije, uz visok kvalitet materijala i izrade.",
      icon: <ConstructionIcon fontSize="inherit" />,
      image: "/imgs/renoviranje.jpg",
    },
  ]

  const emergency = {
    title: "Hitne intervencije",
    description:
      "Dostupni smo 24/7 za hitne intervencije. Naš tim stručnjaka će brzo reagovati i rešiti problem u najkraćem mogućem roku.",
    phone: "+381 64 17 66 838",
  }

  return (
    <>
      <PageHeader>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Profesionalne vodoinstalaterske usluge
        </Typography>
      </PageHeader>
      <Container sx={{ mb: 8, mt: 2 }}>
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <Box key={index} px={2} sx={{ my: 2 }}>
              <ServiceCard elevation={3}>
                <CardMedia
                  component="img"
                  height="440"
                  image={service.image}
                  alt={service.title}
                />
                <Box sx={{ p: 2, textAlign: "center" }}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    textAlign="center"
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </ServiceCard>
            </Box>
          ))}
        </Slider>

        <Typography variant="body1" textAlign="center" paragraph sx={{ mt: 8 }}>
          Pružamo širok spektar vodoinstalaterskih usluga za stambene i poslovne
          objekte. Naš tim iskusnih vodoinstalatera je spreman da vam pomogne sa
          svim vodovodnim problemima.
        </Typography>

        <Box
          sx={{
            mt: 4,
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="h3" gutterBottom>
              {emergency.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {emergency.description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={`tel:${emergency.phone.replace(/\s/g, "")}`}
            >
              {emergency.phone}
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
