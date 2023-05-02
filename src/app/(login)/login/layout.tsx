"use client";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import { Container, Typography, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/MUI';

interface layoutProps {
  children: React.ReactNode
}

const layout: React.FC<layoutProps> = ({children}) => {
  return (
    <html lang='pt-br'>
      <body>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
          <Stack gap={1} justifyContent="center" alignItems="center" mt={10}>
            <Typography component="h3" variant="h3">Delivery</Typography>
            <Typography component="h5" variant="h5">Painel do estabelecimento</Typography>
            {children}
          </Stack>
        </Container>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default layout;