import type { JSX } from 'react';

import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { PLANS } from '../../../data/Landing';

function Pricing(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Box>
      <Box component="section" sx={{ mb: 4 }}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {t('Simple, Transparent Pricing')}
        </Typography>
        <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 1 }}>
          {t('Start free. Upgrade when you\'re ready. Cancel anytime.')}
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {PLANS.map((p, idx) => (
          <Grid size={{xs: 12, sm: 8, md: 4}} key={p.title}>
            <Paper elevation={1} sx={{ p: 3, minHeight: 220, border: idx === 1 ? '2px solid #2A56FF' : undefined }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{p.title}</Typography>
              <Typography variant="h3" sx={{ mt: 1 }}>{p.price}</Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mb: 2, mt: 1 }}>{p.subtitle}</Typography>
              <Box component="ul" sx={{ pl: 1, m: 0 }}>
                {p.features.map(f => (
                  <Box component="li" key={f.feature} sx={{ listStyle: 'none', display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                    {
                      f.included ? <AddTaskRoundedIcon fontSize='small' sx={{ color: "success.dark" }} /> : <CancelRoundedIcon fontSize='small' sx={{ color: "error.main" }} />
                    }
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary'}}>{f.feature}</Typography>
                  </Box>
                ))}
              </Box>
              <Button variant='contained' sx={{ py: 0.5, mt: 2 }}>
                {t('Select')}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Pricing;
