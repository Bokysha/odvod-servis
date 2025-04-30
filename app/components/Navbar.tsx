"use client"

import { useState, useContext } from "react"
import { useTheme } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import HandymanIcon from "@mui/icons-material/Handyman"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import CloseIcon from "@mui/icons-material/Close"
import Link from "next/link"
import { ColorModeContext } from "../context/ThemeContext"
import Image from "next/image"

const pages = [
  { name: "Početna", path: "/", icon: <HomeIcon /> },
  { name: "O nama", path: "/about", icon: <InfoIcon /> },
  { name: "Usluge", path: "/services", icon: <HandymanIcon /> },
  { name: "Galerija", path: "/gallery", icon: <PhotoLibraryIcon /> },
  { name: "Kontakt", path: "/contact", icon: <ContactMailIcon /> },
]

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Drawer Button */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo and Name - Mobile and Desktop */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/imgs/logo_bez_pozadine.png"
              alt="Odvod Servis Logo"
              width={50}
              height={50}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ODVOD SERVIS
            </Typography>
          </Box>

          {/* Mobile Title */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ODVOD SERVIS
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                  fontWeight: 700,
                  borderRadius: 1,
                  mx: 0.5,
                  px: 2,
                  transition: "all 0.2s",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
              aria-label="Toggle light/dark theme"
            >
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          {/* Enhanced Drawer */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: 280,
                boxSizing: 'border-box',
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Drawer Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/imgs/logo_bez_pozadine.png"
                    alt="Odvod Servis Logo"
                    width={40}
                    height={40}
                  />
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
                    ODVOD SERVIS
                  </Typography>
                </Box>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleDrawer(false)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Divider />

              {/* Navigation Links */}
              <List sx={{ flexGrow: 1, pt: 1 }}>
                {pages.map((page) => (
                  <ListItem key={page.name} disablePadding
                    sx={{
                      px: 1,
                      mb: 0.5,
                      borderBottom: `1px solid ${theme.palette.primary.main}`,
                      borderRadius: "10%"
                    }}>
                    <ListItemButton
                      component={Link}
                      href={page.path}
                      onClick={toggleDrawer(false)}
                      sx={{
                        py: 1.5,
                        '&:hover': {
                          bgcolor: theme.palette.mode === 'light'
                            ? 'rgba(0, 0, 0, 0.04)'
                            : 'rgba(255, 255, 255, 0.08)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: 45 }}>
                        {page.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={page.name}
                        primaryTypographyProps={{
                          fontWeight: 700,
                          fontSize: '1rem',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Divider />

              {/* Theme Toggle in Drawer */}
              <Box sx={{ p: 2 }}>
                <ListItemButton
                  onClick={() => {
                    colorMode.toggleColorMode();
                  }}
                  sx={{
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'light'
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                    {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={theme.palette.mode === "dark" ? "Svetli rezim" : "Tamni rezim"}
                  />
                </ListItemButton>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar