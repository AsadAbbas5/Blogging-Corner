import { Box, Grid, Typography, } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Man from "../../../statics/img/Man.png"
function HeroSection() {
    return (

        <Grid container marginTop="5rem">
            <Grid item md={8} xs={12} textAlign={"start"} display="flex" justifyContent="center" alignItems="center">
                <Box>
                    <Typography fontSize={"2rem"} color="#fff" fontWeight={700} >Hi There I am Asad</Typography>
                    <Typography marginTop="1rem" fontSize={"1rem"} color="#fff" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quidem iusto natus, quis eius at reiciendis ad. Culpa, dicta.
                    </Typography>
                    <Box marginTop="1rem">
                        <TwitterIcon sx={{ color: "#fff", fontSize: "2rem", padding: "3px", borderRadius: "50%", backgroundColor: "#1DA1F2", marginRight: "0.5rem" }} />
                        <FacebookIcon sx={{ color: "#fff", fontSize: "2rem", padding: "3px", borderRadius: "50%", backgroundColor: "#1778F2", marginRight: "0.5rem" }} />
                        <LinkedInIcon sx={{ color: "#fff", fontSize: "2rem", padding: "3px", borderRadius: "50%", backgroundColor: "#59ACFF", marginRight: "0.5rem" }} />
                        <YouTubeIcon sx={{ color: "#fff", fontSize: "2rem", padding: "3px", borderRadius: "50%", backgroundColor: "#FF0000", marginRight: "0.5rem" }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item md={4} xs={12}>
                <img src={Man} width="60%" />

            </Grid>

        </Grid>
    )
}

export default HeroSection