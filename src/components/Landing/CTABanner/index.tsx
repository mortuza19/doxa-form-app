import { type JSX } from 'react';

import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function CTABanner(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box component="section" sx={{
      background: 'linear-gradient(90deg,#2A56FF 0%, #7B61FF 100%)',
      color: 'white',
      py: 6
    }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 800 }}>{t('Ready to Eliminate Paperwork and Simplify Onboarding?')}</Typography>
        <Typography sx={{ mt: 1, mb: 3 }}>{t('Start your 14-day free trial or book a live demo with our team today.')}</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="inherit" sx={{ color: '#0f1724', paddingY: '8px' }}>{t('Start Free Trial')}</Button>
          <Button variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.7)', color: 'white', paddingY: '8px' }}>{t('Book Demo')}</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CTABanner;
