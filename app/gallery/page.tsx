"use client"

import { useState, useCallback, Suspense } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CircularProgress,
  useMediaQuery,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { styled } from "@mui/material/styles"
import { galleryImages } from "../utils/Gallery"
import dynamic from "next/dynamic"
import Image from "next/image"

const ImageModal = dynamic(() => import("../components/ImageModal"), {
  ssr: false,
  loading: () => <CircularProgress />,
})

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 0),
  marginBottom: theme.spacing(2),
}))

const ImageCard = styled(Card)(() => ({
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.05)",
  },
}))

const ImageContainer = styled(Box)({
  position: "relative",
  height: 220,
  width: "100%",
})

const GalleryPage = () => {
  const [openImage, setOpenImage] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const handleOpenImage = useCallback((index: number) => {
    setCurrentIndex(index)
    setOpenImage(true)
  }, [])

  const handleCloseImage = useCallback(() => {
    setOpenImage(false)
  }, [])

  const handlePrevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(newIndex)
  }, [currentIndex])

  const handleNextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(newIndex)
  }, [currentIndex])

  return (
    <>
      <PageHeader>
        <Container>
          <Typography variant="h3" component="h1" textAlign="center">
            Galerija radova
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ImageCard onClick={() => handleOpenImage(index)} elevation={3}>
                <ImageContainer>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5gITTdQAAAABJRU5ErkJggg=="
                  />
                </ImageContainer>
              </ImageCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {openImage && (
        <Suspense fallback={<CircularProgress />}>
          <ImageModal
            open={openImage}
            currentIndex={currentIndex}
            onClose={handleCloseImage}
            fullScreen={fullScreen}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        </Suspense>
      )}
    </>
  )
}

export default GalleryPage