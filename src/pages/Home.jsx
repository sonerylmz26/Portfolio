import { Box, Button, CardMedia, Grid, Typography } from "@mui/material"
import profile from "../assets/IMG_20220721_222712.jpg"

const Home = () => {
  return (
    <>
<Grid sx={{height:{xs:"100%",sm:"90vh"}}} container spacing={2}>
  <Grid sx={{display:"flex", }} item  xs={12} md={4}>
    <Box sx={{
      p:5,
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      gap:"10px",
      width:{xs:"100%",}
      }}>
      <Typography sx={{   
  fontSize:{xs:"40px"},
  textAlign:"center",
  fontWeight:"bold",
  color:"white",
  textShadow:"2px 2px 5px black"
}} 
variant="h5" 
gutterBottom
>
      I'm Soner YILMAZ

</Typography>

      </Box>
     
  </Grid>

  <Grid sx={{display:"flex", }} item  xs={12} md={2}>
    <Box sx={{
      width:{xs:"100%",},
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      }}>
           <CardMedia
sx={{
 width:200 ,
 height:200, 
 borderRadius:"5%", objectFit:"cover",  
}}
        component="img"
        image={profile}
        alt="Paella dish"
      />
    
    </Box>
  </Grid>


  <Grid sx={{display:"flex", }} item  xs={12} md={6}>
    <Box sx={{
      p:5,
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      gap:"10px",}}>
      <Typography 
      sx={{
        fontSize:{xs:"32px"},
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
        textShadow:"2px 2px 5px black"

      }}
      
      textAlign="center" variant="h5" gutterBottom>
      I am a web developer with ambition, passion and good knowledge. I am especially interested in the Frontend/Web Development, HTML, CSS, JS, React.
      </Typography>
      
      <Button variant = "contained">
      Resume
     </Button>
    </Box>
  </Grid>

</Grid>


    </>
  )
}

export default Home