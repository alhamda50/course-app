import { TextField, Grid, Typography, Button } from '@mui/material';
import React from 'react';

const Add = () => {
  return (
    <> <br />
      <Typography variant="h5" gutterBottom sx={{fontWeight: 800,  fontSize: 35}}>
        Add New Course:
      </Typography> <br />
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="subtitle1">Course Id:</Typography>
          <TextField id="course-id" variant="standard" sx={{ width: 500 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Course Name:</Typography>
          <TextField id="course-name" variant="standard" sx={{ width: 500 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Course Category:</Typography>
          <TextField id="course-category" variant="standard" sx={{ width: 500 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Course Description:</Typography>
          <TextField id="course-description" variant="standard" sx={{ width: 500 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Course Fee:</Typography>
          <TextField id="course-fee" variant="standard" sx={{ width: 500 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Image URL:</Typography>
          <TextField id="course-image" variant="standard" sx={{ width: 500 }} 
      
          /> <br />
          <Button color="inherit" sx={{ margin: 2, backgroundColor: '#626F47', color: 'white', '&:hover': { border: 1, 
          backgroundColor: 'white', fontWeight: 600, color: '#626F47'},'&:focus': {outline: 'none'}}}>Submit</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Add;
