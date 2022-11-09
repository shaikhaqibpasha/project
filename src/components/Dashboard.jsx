import React from 'react';
import {InputBase,Grid,Paper,Card,CardContent,Button, Avatar} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from "@mui/icons-material/GitHub";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";





export const Dashboard = () => {
  return (
    <div>
    <div style={{marginLeft:"150px",marginTop:"50px",width:"80%"}}>
   <span>
    <ArrowBackIosNewIcon sx={{margin:-1}}/>
    <span style={{marginLeft:"20px"}}>
    <b>Go Back</b>
    </span>
    </span>
    <Grid item xs={12}>
    <Grid container spacing={2}>
    <Grid item xs={8}>
    <h1>Settings</h1>
    </Grid>
    <Grid item xs={4}>
    <Paper
      sx={{  display: 'flex', width: 300,margin:3 }}
    >
    <IconButton  sx={{ p: '10px' }} aria-label="search">
    <SearchIcon />
  </IconButton>
  <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
       
      />
  </Paper>
  </Grid>
  </Grid>
  </Grid>
   <hr/>
   <Box>
        <Toolbar/>
        <List sx={{width:200,bottom:50}}>
          {['My details', 'Team', 'Plan', 'integration','Api'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{borderRadius:1}}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>
        </div>
        <div className="new2">
       
            <h1>Integrated apps</h1>
            <p>You can manage and customize you connected apps</p>
            <Button   className="but" variant="contained"> + Add New</Button>
            <hr/>
        
      </div>
      <div className="new3">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/color/48/null/dropbox.png"/>
              <ToggleOnIcon className="Drop" sx={{ fontSize: 50 }}  color="primary" />
                <h3>Dropbox</h3>
                <p>Everything you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
                <GitHubIcon className="github" sx={{ fontSize: 40 }}   />
                <h3>Github</h3>
                <p>Link pull requests and automate workflows</p>
                <ToggleOffIcon
                  className="Toggle"
                  sx={{ fontSize: 50, color: "" }}
                  color="primary"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/color/48/null/jira.png" />
                <ToggleOffIcon
                  className="Toggle2"
                  sx={{ fontSize: 50 }}
                  color="primary"
                />
                <h3>JIRA</h3>
                <p>Everything you need for work,all in one place.</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/color/48/null/slack-new.png"/>
                <ToggleOffIcon
                  className="Toggle3"
                  sx={{ fontSize: 50, color: "" }}
                  color="primary"
                />
                <h3>Slack</h3>
                <p>Everything you need for work,all in new place </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/100/null/external-asana-a-web-and-mobile-application-designed-to-help-teams-organize-track-and-manage-their-work-logo-tritone-tal-revivo.png"/>
                <ToggleOnIcon
                  className="Toggle4"
                  sx={{ fontSize: 50, color: "" }}
                  color="primary"
                />
                <h3>Asana</h3>
                <p>Everything you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/null/external-zapier-an-american-corporation-allows-to-integrate-the-web-applications-logo-color-tal-revivo.png"/>
                <ToggleOnIcon
                  className="Toggle5"
                  sx={{ fontSize: 50, color: "" }}
                  color="primary"
                />

                <h3>Zapier</h3>
                <p>Everything you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270,  }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/material-outlined/100/null/notion--v1.png"/>
                <ToggleOnIcon
                  className="Toggle6"
                  sx={{ fontSize: 50, color: "" }}
                  color="primary"
                />
                <h3>Nation</h3>
                <p>Everythig you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 220, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/null/external-dropbox-online-file-storage-with-cloud-computing-logo-shadow-tal-revivo.png"/>
                <ToggleOffIcon
                  className="Toggle7"
                  sx={{ fontSize: 50, }}
                  color="primary" 
                />
                <h3>Dropbox</h3>
                <p>Everthing you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ height: 219, width: 270 }}>
              <CardContent>
              <Avatar src="https://img.icons8.com/color/48/null/zendesk.png"/>
                <ToggleOnIcon
                  className="Toggle8"
                  sx={{ fontSize: 50,  }}
                  color="primary"
                />
                <h3>Zendesk</h3>
                <p>Everything you need for work,all in one place</p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
