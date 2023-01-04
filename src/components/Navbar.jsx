import * as React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import CookieIcon from "@mui/icons-material/Cookie";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function ButtonAppBar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Searchbar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "25px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = React.useState(false); // Initialize the open state variable and setOpen function to control it

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Cookie
        </Typography>
        <CookieIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Searchbar>
          <InputBase placeholder="Search" />
        </Searchbar>
        <Icons>
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color=  "error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)} // Call setOpen(true) to open the menu
            src="https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-white-wall-2379004/"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            onClick={(e) => setOpen(true)} // Call setOpen(true) to open the menu
            src="https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-white-wall-2379004/"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">Cookie</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} // Pass the open state variable here
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
