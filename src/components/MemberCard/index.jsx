import { 
  Card,
  CardContent, 
  CardMedia, 
  Typography
} from "@mui/material";

const cardStyle = { 
  borderRadius: 2, 
  cursor: "pointer", 
  boxShadow: 3, 
  mx: "auto",
  width: "100%",
  maxWidth: 250 
};

const MemberCard = ({ member, onClick }) => (
    <Card sx={cardStyle} onClick={onClick}>
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
);

export default MemberCard;