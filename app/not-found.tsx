import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 4
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontWeight: 700 }}>
          404
        </Typography>
        <Typography variant="h4" component="h2">
          Stranica nije pronadjena
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 450, mb: 4 }}>
          Stranica koju ste trazili vise ne postoji ili je pomerena.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          size="large"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}