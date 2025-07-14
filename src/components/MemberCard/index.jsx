import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const MemberCard = ({ member }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ borderRadius: 2 }}>
            {member.photo && (
                <CardMedia
                component="img"
                height="200"
                image={member.photo}
                alt={member.name}/>
            )}
            <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography color="text.secondary">{member.role}</Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}

export default MemberCard;