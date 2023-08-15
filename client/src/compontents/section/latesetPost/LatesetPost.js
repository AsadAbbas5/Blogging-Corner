
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import LatestPostCard from './LatestPostCard'
function LatesetPost() {
    return (
        <Box margin="5rem 0">
            <Box>
                <Box textAlign="start" margin="1rem 0">
                    <Typography fontSize="2rem" color="#fff"> Lateset post</Typography>
                    <Typography fontSize="1rem" color="#fff"> There are our latest Posts.</Typography>
                </Box>
                <Grid container backgroundColor="rgba(255,255,255,0.3)" borderRadius="10px">
                    <Grid item md={6}>
                        <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" width="100%" style={{ borderRadius: "10px 0 0 10px" }} />
                        
                    </Grid>
                    <Grid item md={6}>
                        <Typography fontSize="2rem " color="#fff">Blog Name</Typography>
                        <Typography fontSize="1.2rem " color="#fff">Blog Details</Typography>
                        <Typography fontSize="1rem " color="#fff">Blog Data</Typography>
                        <Button variant='contained'>Red More</Button>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <LatestPostCard/>
                <Box>
                <Button variant='outlined'>load More</Button>

                </Box>
            </Box>
        </Box>
    )
}

export default LatesetPost