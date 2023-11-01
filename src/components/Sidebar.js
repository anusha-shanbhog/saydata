import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import RocketIcon from '@mui/icons-material/Rocket';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: 'sidebar' }}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Button
          onClick={toggleSidebar}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', pl: 1 }}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>

        {isSidebarOpen && (
          <>
            <List sx={{ width: 250 }}>
                <h2 style={{marginLeft:"10px"}}>abc firm</h2>
              <ListItem button>
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FolderOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="All Files" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarBorderOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Saved" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsInputComponentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DeleteOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Settings and Help" />
              </ListItem>
              
              <ListItem button>
                <ListItemIcon>
                  <SupportOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItem>
            </List>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '85%', margin: "10px", borderRadius: "10px", backgroundColor: '#E0EDFF', padding: '10px', textAlign: 'center' }}>
            <RocketOutlinedIcon />
              <h4>Upgrade Account</h4>
              <p>Access to unlimited subscription</p>
              <Button variant="contained" sx={{ backgroundColor: "#0048AD" }}>
                Upgrade
              </Button>
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Sidebar;
