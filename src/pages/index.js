import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { formSchema } from '@/validationSchema/formSchema';
import { Box, Grid, Typography } from '@mui/material';

const CvForm = () => {
  const [formValue, setFormValue] = useState()
  console.log(formValue.fullName);
  
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '', // Ensure all form fields have initial values
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
          // console.log(values);
          setFormValue(values)
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
              id="fullName"fullName
              name=""
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
        </Grid>
        <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default CvForm;
