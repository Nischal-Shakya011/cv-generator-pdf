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
// import Rough from '../components/Rough'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

const CvForm = () => {
  const [experienceFields, setExperienceFields] = useState([{ title: '', company: '', period: '', responsibilities: [''] }]);
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      github: '',
      contact: '',
      address: '',
      linkedin: '',
      dateOfBirth: '',
      education: [{ degree: '', institution: '', year: '' }],
      experience: [{ title: '', company: '', period: '', responsibilities: [''] }]
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
          console.log(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });
const addEducationField = () => {
  formik.setFieldValue('education', [
    ...formik.values.education,
    { degree: '', institution: '', year: '' },
  ]);
};

const removeEducationField = (index) => {
  const updatedEducationField = formik.values.education.filter((_, i) => i !== index )
  formik.setFieldValue('education', updatedEducationField)
}

const addExperienceField = () => {
  const newExperienceFields = [
    ...formik.values.experience,
    { title: '', company: '', period: '', responsibilities: [''] },
  ];

  formik.setFieldValue('experience', newExperienceFields);
};

const handleResponsibilitiesChange = (e, index, responsibilityIndex) => {
  const updatedExperienceFields = [...formik.values.experience];
  updatedExperienceFields[index].responsibilities[responsibilityIndex] = e.target.value;
  formik.setFieldValue('experience', updatedExperienceFields);
};

const addResponsibility = (index) => {
  const updatedExperienceFields = [...formik.values.experience];
  updatedExperienceFields[index].responsibilities.push('');
  formik.setFieldValue('experience', updatedExperienceFields);
};
  return (
  <>
  {/* <Rough/> */}
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
         Generate Your CV
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} py={3}>
        
      <Grid item 
      xs={12}
      display={'flex'} 
      justifyContent={'center'}
      >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          bgcolor: 'green',
          color: 'white', 
          width: '100%'
        }}
      >
        <Typography variant="h5">
         Basic Information
        </Typography>
      </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              name="linkedin"
              label="LinkedIn Profile"
              variant="outlined"
              value={formik.values.linkedin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
              helperText={formik.touched.linkedin && formik.errors.linkedin}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
         <MaxHeightTextarea/>
          </Grid>

      <Grid item 
      xs={12}
      display={'flex'} 
      justifyContent={'center'}
      >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          bgcolor: 'green',
          color: 'white', 
          width: '100%'
        }}
      >
        <Typography variant="h5">
         Add Education
        </Typography>
      </Box>
        </Grid>
{formik.values.education.map((field, index) => (
  <React.Fragment key={index}>
    <Grid item xs={12} md={4}>
      <TextField
        requiredad
        fullWidth
        name={`education[${index}].degree`}
        label="Degree"
        variant="outlined"
        value={field.degree}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.education && formik.errors.education && Boolean(formik.errors.education[index]?.degree)}
        helperText={formik.touched.education && formik.errors.education && formik.errors.education[index]?.degree}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <TextField
        required
        fullWidth
        name={`education[${index}].institution`}
        label="Institution"
        variant="outlined"
        value={field.institution}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.education && formik.errors.education && Boolean(formik.errors.education[index]?.institution)}
        helperText={formik.touched.education && formik.errors.education && formik.errors.education[index]?.institution}
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <TextField
        required
        fullWidth
        name={`education[${index}].year`}
        label="Year of Graduation"
        variant="outlined"
        value={field.year}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.education && formik.errors.education && Boolean(formik.errors.education[index]?.year)}
        helperText={formik.touched.education && formik.errors.education && formik.errors.education[index]?.year}
      />
    </Grid>
    <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeEducationField(index)}
                  sx={{backgroundColor:"red"}}
                >
                  Remove
                </Button>
              </Grid>
  </React.Fragment>
))}

<Grid item 
xs={12} 
// display={'flex'} 
// justifyContent={'flex-end'}
>
  <Button variant="contained" onClick={addEducationField}>
    Add Education
  </Button>
  </Grid> 

  <Grid item 
      xs={12}
      display={'flex'} 
      justifyContent={'center'}
      >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          bgcolor: 'green',
          color: 'white', 
          width: '100%'
        }}
      >
        <Typography variant="h5">
         Add Experience
        </Typography>
      </Box>
        </Grid>
        {formik.values.experience.map((field, index) => (
            <React.Fragment key={index}>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name={`experience[${index}].title`}
                  label="Job Title"
                  variant="outlined"
                  value={field.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && formik.errors.experience && Boolean(formik.errors.experience[index]?.title)}
                  helperText={formik.touched.experience && formik.errors.experience && formik.errors.experience[index]?.title}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name={`experience[${index}].company`}
                  label="Company Name"
                  variant="outlined"
                  value={field.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && formik.errors.experience && Boolean(formik.errors.experience[index]?.company)}
                  helperText={formik.touched.experience && formik.errors.experience && formik.errors.experience[index]?.company}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name={`experience[${index}].period`}
                  label="Date Period"
                  variant="outlined"
                  value={field.period}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && formik.errors.experience && Boolean(formik.errors.experience[index]?.period)}
                  helperText={formik.touched.experience && formik.errors.experience && formik.errors.experience[index]?.period}
                />
              </Grid>
              <Grid item xs={3}>
                {field.responsibilities.map((responsibility, responsibilityIndex) => (
                  <TextField
                    key={responsibilityIndex}
                    required
                    fullWidth
                    name={`experience[${index}].responsibilities[${responsibilityIndex}]`}
                    label={`Responsibility ${responsibilityIndex + 1}`}
                    variant="outlined"
                    value={responsibility}
                    onChange={(e) => handleResponsibilitiesChange(e, index, responsibilityIndex)}
                    onBlur={formik.handleBlur}
                    error={formik.touched.experience && formik.errors.experience && Boolean(formik.errors.experience[index]?.responsibilities[responsibilityIndex])}
                    helperText={formik.touched.experience && formik.errors.experience && formik.errors.experience[index]?.responsibilities[responsibilityIndex]}
                  />
                ))}
                <Button 
                sx={{
                  backgroundColor:"green",
                  color:"white",
                  marginTop:"4px",
                  '&:hover':{
                    backgroundColor:"darkgreen"
                  }
                }} 
                onClick={() => addResponsibility(index)}
                >Add Responsibility</Button>
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" onClick={addExperienceField}>Add Experience</Button>
          </Grid>
  </Grid>
 <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
  <Button color="primary" variant="contained" type="submit">
   Submit
  </Button>
  </Grid>
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
    </>
  );
};

export default CvForm;
