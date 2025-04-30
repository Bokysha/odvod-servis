import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#1976d2" : "#0d47a1",
  color: "white",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
}))

const FooterLink = styled(Link)(() => ({
  color: "white",
  textDecoration: "none",
  transition: "all 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
    transform: "translateX(4px)",
  },
}))

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  marginRight: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.1)",
  },
}))

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1.5),
}))

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: "relative",
  paddingBottom: theme.spacing(1),
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "2rem",
    height: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
}))

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const footerLinks = [
    { title: "Početna", path: "/" },
    { title: "O nama", path: "/about" },
    { title: "Usluge", path: "/services" },
    { title: "Galerija", path: "/gallery" },
    { title: "Kontakt", path: "/contact" },
  ]

  const services = [
    { title: "Odgušenje kanalizacije", path: "/services" },
    { title: "Popravka vodovodnih instalacija", path: "/services" },
    { title: "Instalacija sanitarija", path: "/services" },
    { title: "Detekcija curenja vode", path: "/services" },
    { title: "Renoviranje kupatila", path: "/services" },
  ]

  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo i opis */}
          <Grid>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <WaterDropIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                ODVOD SERVIS
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7 }}>
              Profesionalne vodoinstalaterske usluge za vaš dom ili poslovni
              prostor. Kvalitetno, brzo i pouzdano.
            </Typography>
            <Box>
              <SocialButton
                aria-label="Facebook"
                size={isMobile ? "small" : "medium"}
              >
                <Link href="https://facebook.com" target="_blank"  sx={{ color: "white" }}>
                  <FacebookIcon />
                </Link>
              </SocialButton>
              <SocialButton
                aria-label="Instagram"
                size={isMobile ? "small" : "medium"}
              >
                <Link href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
                  <InstagramIcon />
                </Link>
              </SocialButton>
            </Box>
          </Grid>

          {/* Linkovi */}
          <Grid>
            <FooterHeading variant="h6">Brzi Linkovi</FooterHeading>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.map((link) => (
                <Box component="li" key={link.title} sx={{ mb: 1.5 }}>
                  <FooterLink href={link.path}>{link.title}</FooterLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Usluge */}
          <Grid>
            <FooterHeading variant="h6">Naše Usluge</FooterHeading>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {services.map((service) => (
                <Box component="li" key={service.title} sx={{ mb: 1.5 }}>
                  <FooterLink href={service.path}>{service.title}</FooterLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Kontakt */}
          <Grid>
            <FooterHeading variant="h6">Kontaktirajte Nas</FooterHeading>
            <ContactItem>
              <LocationOnIcon sx={{ mr: 1.5, fontSize: 20 }} />
              <Typography variant="body2">
                Vodovodska 123, 11000 Beograd
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon sx={{ mr: 1.5, fontSize: 20 }} />
              <Typography variant="body2">+381 11 123 4567</Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon sx={{ mr: 1.5, fontSize: 20 }} />
              <Typography variant="body2">info@odvodservis.rs</Typography>
            </ContactItem>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", my: 4 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {currentYear} Odvod Servis. Sva prava zadržana.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
