import React, { ReactNode } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/list" passHref>
              <Button color="inherit">List</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box m={2}>{children}</Box>
    </div>
  );
};

export default Layout;
