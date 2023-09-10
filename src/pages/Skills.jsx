import { Box, Container, Grid } from "@mui/material"
import {skills} from "../helper/skılls"
import {skillsBox} from "../style/globalStyle"
const Skills = () => {

  return (
    <Container sx={{display:"flex", justifyContent: "center",
    alignItems: "center", 
   
    padding:"20px"
,    mt:10}}>
<Grid sx={{gap:"5px"}} container spacing={1} >

{
        

        
        skills.map((skill, index) => {
          return (
         <Grid sx={{ display:"flex", 
         p:3,
         hover: {
                backgroundColor: "#fff",
                scale: 1.2,
              },
         justifyContent:"center",m:"auto" }} key={index} item xs={12} sm={4} md={3} lg={2} >

               
            <Box sx={skillsBox}  >
                <img width="80px" src={skill.image} alt="" />
              <h3>{skill.name}</h3>
        </Box>
        </Grid>
          )
        })
      
}
</Grid>
    </Container>
  )
}

export default Skills