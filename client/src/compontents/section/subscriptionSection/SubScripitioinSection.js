import { Box, FormControl, Grid, Button, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'

function SubScripitioinSection() {
    return (
        <Box margin="2rem 0">
            <Grid container>
                <Grid items md={7}>
                    <Typography fontSize={"2rem"} color={"#fff"} textAlign="start">Subscribe to My News Letters</Typography>
                            <Typography textAlign="start" color="#fff">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil debitis corrupti vero quod quia itaque laudantium perferendis voluptatum aperiam aliquid animi, labore porro eaque!
                            </Typography>
                </Grid>
                <Grid items md={5}>
                    
        <FormControl sx={{ m: 1, }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            type={"email"}
            endAdornment={
              <InputAdornment position="end">
                <Button 
                variant='outlined'    
                >
                    subScribe
            </Button>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

                </Grid>

            </Grid>

        </Box>
    )
}

export default SubScripitioinSection
