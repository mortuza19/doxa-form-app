import type { JSX } from 'react';

import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import type { FAQ } from '../../../models/Landing';


function FAQSection(): JSX.Element {
  const { t } = useTranslation();
  const faqs: FAQ[] = [
    { question: t('Do clients need email addresses?'), answer: t('No — clients can sign via a secure link.') },
    { question: t('Are e-signatures legally binding?'), answer: t('Yes, when used correctly they are enforceable.') },
    { question: t('Can HR edit forms after submission?'), answer: t('Yes — admins can enable edit permissions.') },
    { question: t('How secure is client data?'), answer: t('We use encryption in transit and at rest.') }
  ];
  return (
    <Box display='flex' flexDirection='column' sx={{ gap: 4, alignItems: { xs: 'center', md: 'flex-start' }}}>
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
          {t('About Doxa IT Solutions')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {t('We specialize in digital transformation for healthcare. With Doxa form, we help Colorado home care agencies save time, reduce errors and ensure compliance seamlessly .')}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto', width: '100%' }}>
        <Typography variant="h1" align="center" sx={{ fontWeight: 800, mb: 4 }}>
          {t('Frequently Asked Questions')}
        </Typography>
        {faqs.map((f) => (
          <Accordion key={f.question} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 700 }}>{f.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '0.8rem'}}>{f.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;
