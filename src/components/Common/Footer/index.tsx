import type { JSX } from 'react';

import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.50', borderTop: '1px solid', borderColor: 'grey.200', mt: 4 }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ py: 3 }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {t('Doxa IT Solutions. All rights reserved.')}
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary">
              <span>{t('Contact')}:</span> <Link href="mailto:hello@doxa.io" color="text.secondary" underline="hover">hello@doxa.io</Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
