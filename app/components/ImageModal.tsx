"use client"

import { memo, useState, useEffect, useCallback, KeyboardEvent } from "react"
import {
  Box,
  Typography,
  Dialog,
  IconButton,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import OpenInFullIcon from "@mui/icons-material/OpenInFull"
import Image from "next/image"
import { galleryImages } from "../utils/Gallery"

interface ImageModalProps {
  open: boolean
  currentIndex: number
  fullScreen: boolean
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

const ModalNavButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}))

const ModalImage = styled(Box)({
  position: "relative",
  width: "100%",
  height: "70vh",
})

const ImageModal = ({
  open,
  currentIndex: initialIndex,
  fullScreen,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isFullScreen, setIsFullScreen] = useState(fullScreen)
  const totalImages = galleryImages.length

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  const handlePrevImage = useCallback(() => {
    const newIndex = (currentIndex - 1 + totalImages) % totalImages
    setCurrentIndex(newIndex)
    onPrev?.()
  }, [currentIndex, totalImages, onPrev])

  const handleNextImage = useCallback(() => {
    const newIndex = (currentIndex + 1) % totalImages
    setCurrentIndex(newIndex)
    onNext?.()
  }, [currentIndex, totalImages, onNext])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage()
      } else if (event.key === "ArrowRight") {
        handleNextImage()
      } else if (event.key === "Escape") {
        onClose()
      }
    },
    [handlePrevImage, handleNextImage, onClose]
  )

  const onExpand = useCallback(() => {
    setIsFullScreen((prev) => !prev)
  }, [])

  const currentImage = galleryImages[currentIndex]
  if (!currentImage) return null

  return (
    <Dialog
      fullScreen={isFullScreen}
      maxWidth="lg"
      open={open}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      PaperProps={{
        sx: { overflowY: "hidden" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          height: "100%",
          width: isFullScreen ? "100%" : "400px",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: 2,
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          aria-label="expand"
          onClick={onExpand}
          sx={{
            position: "absolute",
            right: 56,
            top: 8,
            color: "white",
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: 2,
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <OpenInFullIcon />
        </IconButton>

        <ModalNavButton
          onClick={handlePrevImage}
          sx={{ left: 8, width: 48, height: 48 }}
          aria-label="Previous image"
        >
          <ArrowBackIcon fontSize="large" />
        </ModalNavButton>

        <ModalNavButton
          onClick={handleNextImage}
          sx={{ right: 8, width: 48, height: 48 }}
          aria-label="Next image"
        >
          <ArrowForwardIcon fontSize="large" />
        </ModalNavButton>

        <ModalImage>
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="120vw"
            priority
            style={{ objectFit: "contain" }}
            quality={85}
          />
        </ModalImage>

        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h6" component="h3">
            {currentImage.alt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kategorija: {currentImage.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {currentIndex + 1} / {totalImages}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  )
}

export default memo(ImageModal)
