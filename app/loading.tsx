import Box from "@mui/material/Box"
import Image from "next/image"
import { LinearProgress } from "@mui/material"

export default function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.4)", // tamna pozadina sa opacity
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingX: 2,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          width: 100,
          height: 100,
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          mb: 2,
        }}
      >
        <Image src="/imgs/logo.jpeg" alt="Loader" width={100} height={100} />
      </Box>

      <Box sx={{ width: "80%", maxWidth: 200 }}>
        <LinearProgress
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#2561a5",
            },
          }}
        />
      </Box>
    </Box>
  )
}
