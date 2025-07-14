import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MemberCard from "../../components/MemberCard";
import teamData from "../../assets/data/members.json";
import { importTeamImages } from "../../utils/importImages";

const statusNames = {
    member: "Members",
    related_member: "Related Members",
    past_member: "Past Members"
};

const View = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    setImages(importTeamImages());
  }, []);

  /* group members by "status" property */
  const groupedMembers = Object.keys(teamData).reduce((acc, key) => {
    const member = teamData[key];
    if (!acc[member.status]) {
      acc[member.status] = [];
    }
    acc[member.status].push({ ...member, photo: images[member.pic] });
    return acc;
  }, {});

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Group Members</Typography>
      <Grid container spacing={4}>
        {Object.keys(groupedMembers).map(status => (
          <Grid item xs={12} key={status}>
            <Typography variant="h5" gutterBottom>{statusNames[status]}</Typography>
            <Grid container spacing={4} justifyContent={"center"} alignItems={"center"}>
              {groupedMembers[status].map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default View;
