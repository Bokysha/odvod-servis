"use client"

import { Box, Typography, Container, Grid, Paper, Avatar } from "@mui/material"
import { styled } from "@mui/material/styles"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import PeopleIcon from "@mui/icons-material/People"

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
  marginBottom: theme.spacing(6),
}))

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}))

const TeamMemberCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}))

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}))

export default function AboutPage() {
  const values = [
    {
      icon: <ThumbUpIcon fontSize="large" />,
      title: "Kvalitet",
      description:
        "Kvalitet naših usluga je naš prioritet. Koristimo samo proveren materijal i najsavremeniju opremu.",
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: "Brzina",
      description:
        "Svesni smo da problemi sa vodovodnim instalacijama zahtevaju brzu reakciju, zato smo uvek spremni da reagujemo u najkraćem mogućem roku.",
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Posvećenost klijentima",
      description:
        "Naši klijenti su naš prioritet. Trudimo se da ispunimo sve zahteve i očekivanja naših klijenata.",
    },
  ]

  const team = [
    {
      name: "Milorad Matijević",
      position: "Osnivač i generalni direktor",
      avatar: "/imgs/milorad.jpg",
      initials: "MM",
    },
    {
      name: "Ivan Matijević",
      position: "Glavni izvodjač radova",
      avatar: "/imgs/ivan.jpg",
      initials: "IM",
    },
    {
      name: "Bojana Matijević",
      position: "Računovodja i pozivni centar",
      avatar: "/imgs/bojana.png",
      initials: "BM",
    },
    {
      name: "Bogdan Matijević",
      position: "Marketing Menadžer",
      avatar: "/imgs/bogdan.jpg",
      initials: "BM",
    },
  ]

  return (
    <>
      <PageHeader>
        <Container>
          <Typography variant="h3" component="h1" textAlign="center">
            O nama
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={6}>
          <Grid>
            <Typography variant="h4" component="h2" gutterBottom>
              Naša priča
            </Typography>
            <Typography variant="body1" paragraph>
              Firma &quot;Odvod Servis&quot; osnovana je 2023. godine u Arandjelovcu sa  sa ciljem da pruži kvalitetne
              vodoinstalaterske usluge u Beogradu, Arandjelovcu, Topoli, Kragujevcu, Mladenovcu, Lazarevcu i po potrebi ostalim gradovima Šumadije . Počeli smo kao mala
              porodična firma, a danas smo prepoznatljiv brend u oblasti
              vodoinstalaterskih usluga.
            </Typography>
            <Typography variant="body1" paragraph>
              Sa velikim izborom tehnologije i opreme i dosta iskustva u rešavanju svih vrsta problema sa
              vodovodnim instalacijama, naš tim je spreman da se suoči sa svakim
              izazovom i pruži kvalitetna rešenja za vaš dom ili poslovni
              prostor.
            </Typography>
            <Typography variant="body1">
              Naši klijenti nas cene zbog brzine, pouzdanosti i kvaliteta usluga
              koje pružamo. Verujemo da je zadovoljan klijent najbolja reklama,
              zato se trudimo da svaki posao obavimo profesionalno i efikasno.
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
              alt="Odvod Servis tim"
              src="/imgs/about.jpg"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Naše vrednosti
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((value, index) => (
              <Grid key={index} sx={{ width: "100%" }}>
                <ValueCard elevation={2}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            Naš tim
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", flexWrap: "wrap", mt: 2, justifyContent: "center" }}
          >
            {team.map((member, index) => (
              <Grid key={index}>
                <TeamMemberCard elevation={2}>
                  <LargeAvatar src={member.avatar} alt={member.name}>
                    {member.initials}
                  </LargeAvatar>
                  <Typography variant="h6" component="h3">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                </TeamMemberCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
