import React from "react";
import "../components/New.css"
import {Card, CardContent} from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const NavBar = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Link className="mainNew" to="Dash">
            <b> Dashboard</b>   
          </Link>

          <Link className="New" to="Pay">
            <b> Payment</b>
          </Link>
          <Link className="New" to="Book">
            <b>Bookings</b>
          </Link>
          <Link className="New" to="Units">
            <b>Units</b>
          </Link>
          <Link className="New" to="State">
            <b> Statements </b>
          </Link>
          <NotificationsNoneIcon sx={{margin:-1,marginLeft:10}}/> |
        </CardContent>
      </Card>
       </div>
  );
}