import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { formSchema } from '@/validationSchema/formSchema';
import { Box, Grid, Typography } from '@mui/material';
// import { PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from '@/components/Document';
import dynamic from 'next/dynamic';
import MaxHeightTextarea from '../components/TextArea';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

const CvForm = () => {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '', 
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
          // console.log(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='p-6 m-auto'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          bgcolor: 'black',
          color: 'white', 
        }}
      >
        <Typography variant="h5">
          Fill up the form
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} py={3}>
        <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="fullName"
              label="Full Name"
              type="text"
              variant="outlined"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="github"
              label="Github Link"
              variant="outlined"
              value={formik.values.github}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.github && Boolean(formik.errors.github)}
              helperText={formik.touched.github && formik.errors.github}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="contact"
              label="Contact No"
              variant="outlined"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.contact && Boolean(formik.errors.contact)}
              helperText={formik.touched.contact && formik.errors.contact}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="address"
              label="Address"
              variant="outlined"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          required
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          error={
            formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
          }
          // inputProps={{ max: minAge }}
          helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
        />
          </Grid>
          <Grid item xs={6}>
         <MaxHeightTextarea/>
          </Grid>

          
        </Grid>
        {/* <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid> */}
      </form>
      <PDFDownloadLink
        document={<MyDocument formData={formik.values} />}
        fileName={`${formik.values.fullName}.pdf`}
      >
        {({ loading }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default CvForm;
