import { useEffect, useState, useMemo } from "react";
import { Box, Grid, Typography, Modal } from "@mui/material";
import MemberCard from "../../components/MemberCard";
import members from "../../assets/data/members.json";
import { importImages } from "../../utils/importImages";

const statusNames = {
    member: "Current members",
    related_member: "Related Members",
    past_member: "Past Members"
};

const ModalContent = ({ member }) => (
  <Box sx={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%',  
    transform: 'translate(-50%, -50%)', 
    width: 500, 
    height: 'auto', 
    maxHeight: '80vh', 
    overflowY: 'auto',
    bgcolor: 'background.paper', 
    boxShadow: 24, 
    p: 4,
    borderRadius: 2
  }}>
    {member && (
      <>
        <Typography variant="h6">{member.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{member.degree}</Typography>
        {member.photo && (
          <img src={member.photo} alt={member.name} style={{ width: '100%', height: 'auto', marginTop: 16 }} />
        )}
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          {member.contact?.email && `Email: ${member.contact.email}`}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>{member.bio}</Typography>
      </>
    )}
  </Box>
);

const View = () => {
  const [images, setImages] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = member => {
    setSelectedMember(member);
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setImages(importImages("members"));
  }, []);

  const groupedMembers = useMemo(() => {
    return members.reduce((acc, member) => {
      if (!member.status) return acc;
      if (!acc[member.status]) {
        acc[member.status] = [];
      }
      acc[member.status].push({ 
        ...member, 
        photo: images[member.pic] || null 
      });
      return acc;
    }, {});
  }, [images]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Group Members</Typography>
      <Grid container spacing={4} direction="column">
        {Object.keys(groupedMembers).map(status => (
          <Grid item xs={12} key={status}>
            <Typography variant="h5" gutterBottom>{statusNames[status]}</Typography>
            <Grid container spacing={4} justifyContent={"center"} alignItems={"center"} xs={12}>
              {groupedMembers[status].map(member => (
                <MemberCard key={member.id} member={member} onClick={e => handleOpen(member)} />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <ModalContent member={selectedMember}/>
      </Modal>
    </Box>
  );
};

export default View;
