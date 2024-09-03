import React from 'react';
import { useState } from 'react';
import { Grid, Typography,Box, Button } from '@mui/material';
import Dropzone from 'react-dropzone';
import InsertImage from '../assets/InsertImage.png'
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';


export default function StyledDropzone({formik}) {
const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (acceptedFiles) => {
    const fileUrl = URL.createObjectURL(acceptedFiles[0]);    
    setPreviewUrl(fileUrl);
    formik.setFieldValue('image', fileUrl);
  };

return (
    <Grid container py={3} sx={{display:"flex", justifyContent: "center"}}>
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
       Add Your Passport Size Photo
      </Typography>
    </Box>
    </Grid>
    <Grid item md={6} xs={12} sx={{
        border: "2px solid red",
        p: "4px",
        marginTop: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"}}>
{
!previewUrl ?
<Dropzone onDrop={handleFileChange}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()} className='text-center'>
        <input {...getInputProps()} />
        {/* <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
          bgcolor: '#f2b5b1',
          color: 'white', 
          width: '100%'
        }}
        // onClick={setPreviewUrl(false)}
      >
        <Typography variant="h5">
        Delete
        </Typography>
      </Button> */}
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
        <div>
        <Image
            src={InsertImage}
            alt="Upload Image"
            style={{ width: "250px", height: "250px", marginBottom: "20px" }}
            height={200}
            width={200}
          />
        <p>Drag and drop some files here, or click to select files</p>
        <em>(support png or jpg file only)</em>
        </div>
        
      </div>
      {/* <div>
    {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      </div> */}
    </section>
  )}
</Dropzone>
:
<div className='flex flex-col justify-center'>
<div>
    {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      </div> 
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setPreviewUrl(null)}>
      Delete
    </Button>
    </div> 
 }
</Grid>
</Grid>
  );
}

