"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import emailjs from "@emailjs/browser"

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 15,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}))

const ContactCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(1),
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.palette.primary.main,
}))

type Snackbar = {
  open: boolean
  message: string
  severity: "success" | "error"
}

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type Errors = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

const initialErrors: Errors = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<any>(initialErrors)
  const [snackbar, setSnackbar] = useState<any>({
    open: false,
    message: "",
    severity: "success",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Errors = {}

    if (!formData.name.trim()) newErrors.name = "Ime je obavezno"
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email nije validan"
    }
    if (!formData.message.trim()) newErrors.message = "Poruka je obavezna"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) return // 🚫 Stopiraj slanje ako nije validno

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSnackbar({
          open: true,
          message: "Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.",
          severity: "success",
        })

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Email slanje nije uspelo:", error)
        setSnackbar({
          open: true,
          message: "Došlo je do greške. Pokušajte ponovo kasnije.",
          severity: "error",
        })
      })
  }

  const handleCloseSnackbar = () => {
    setSnackbar((prev: any) => ({ ...prev, open: false }))
  }

  const contactInfo = [
    {
      icon: <PhoneIcon fontSize="inherit" />,
      title: "Telefon",
      content: "+381 64 17 66 838",
      link: "tel:+381 64 17 66 838",
    },
    {
      icon: <EmailIcon fontSize="inherit" />,
      title: "Email",
      content: "odvodservis@gmail.com",
      link: "mailto:odvodservis@gmail.com",
    },
    {
      icon: <LocationOnIcon fontSize="inherit" />,
      title: "Adresa",
      content: "Svetolika Rankovica 7, Arandjelovac 34300",
      link: "https://maps.app.goo.gl/DEZGRrVDCmshpMGeA",
    },
    {
      icon: <AccessTimeIcon fontSize="inherit" />,
      title: "Radno vreme",
      content: "Pon-Pet: 08-20h, Sub: 09-15h",
      link: null,
    },
  ]

  return (
    <>
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={6}>
          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, mt: 2 }}
              >
                Kontaktirajte nas
              </Typography>
              <Typography variant="body1" paragraph>
                Popunite formu ispod i kontaktiraćemo vas u najkraćem mogućem
                roku.
              </Typography>
            </Box>

            <ContactForm elevation={3}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      label="Ime i prezime"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  <Grid sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      label="Telefon"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      label="Naslov"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      label="Poruka"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>
                  <Grid sx={{ width: "100%" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ fontWeight: 700 }}
                    >
                      Pošalji poruku
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </ContactForm>
          </Grid>

          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" component="h2" gutterBottom>
                Kontakt informacije
              </Typography>
              <Typography variant="body1" paragraph>
                Možete nas kontaktirati na sledeće načine:
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {contactInfo.map((info, index) => (
                <Grid key={index} sx={{ width: "45%" }}>
                  <ContactCard elevation={3}>
                    <IconWrapper>{info.icon}</IconWrapper>
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          variant="body1"
                          component="a"
                          href={info.link}
                          sx={{ textDecoration: "none", color: "primary.main" }}
                        >
                          {info.content}
                        </Typography>
                      ) : (
                        <Typography variant="body1">{info.content}</Typography>
                      )}
                    </CardContent>
                  </ContactCard>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 4,
                height: "300px",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.407040011115!2d20.55381008715269!3d44.30158199650743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47574d16c00cab2d%3A0xc819b9f1a6712383!2z0KHQstC10YLQvtC70LjQutCwINCg0LDQvdC60L7QstC40ZvQsCA3LCDQkNGA0LDQvdGS0LXQu9C-0LLQsNGGIDM0MzAw!5e0!3m2!1ssr!2srs!4v1745945528171!5m2!1ssr!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Lokacija"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
