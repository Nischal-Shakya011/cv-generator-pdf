import React, { useState } from 'react';
import { Autocomplete, TextField, Chip, Grid, Box, Typography } from '@mui/material';

const SkillsInput = ({formik}) => {
    const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js']);
    const handleSkillChange = (event, newValue) => {
    const inputValue = event.target.value;
    const lastValue = newValue[newValue.length - 1];

    // Check if the last value is a new skill
    if (lastValue && !skills.includes(lastValue)) {
      setSkills([...skills, lastValue]); // Add the new skill to the skills list
    }
    formik.setFieldValue('skills', newValue);
  };

  return (
    <>
    <Grid container spacing={2}>
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
       Add Skills
      </Typography>
    </Box>
    </Grid>

 <Grid item xs={12}>
 <Autocomplete
 multiple
 freeSolo
 options={skills} 
 value={formik.values.skills}
 onChange={handleSkillChange}
 renderInput={(params) => (
  <TextField
    {...params}
    variant="outlined"
    label="Skills"
    placeholder="Add your skills"
    name="skills"
    onBlur={formik.handleBlur}
    error={formik.touched.skills && Boolean(formik.errors.skills)}
    helperText={formik.touched.skills && formik.errors.skills}
  />
)}
renderTags={(value, getTagProps) =>
  value.map((option, index) => (
    <Chip
      key={index}
      label={option}
      {...getTagProps({ index })}
    />
  ))
 }
 />
 </Grid>
 </Grid>
 </>
 );
 };

export default SkillsInput;
