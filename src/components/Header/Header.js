import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/logo.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "@mui/material";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../../App.css";
import Popover from "react-bootstrap/Popover";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Popup from "reactjs-popup";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// const settings = ["Profile", "Payment Settings"];

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="row">
        <AppBar
          style={{
            backgroundColor: "#d5f2f0",
            width: "100%",
          }}
        >
          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "6rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={logo} width="90" height="50" />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "2rem",
                  }}
                >
                  <div>
                    <p className="notification">
                      <NotificationsIcon></NotificationsIcon>
                    </p>
                  </div>
                  <div className="logout_btn">
                    <p>H</p>
                  </div>
                  {/* <div className="expandicon" onClick={()=>setClick(!click)}>
                
                    <ExpandMoreIcon></ExpandMoreIcon>
                 
                  </div> */}
                  <div></div>
                  {/*                 
                  {click  && 
                  <div style={{backgroundColor:"#000",borderRadius:"0.5rem"}}>
                    <div>Payment Settings</div>
                    <div>Accounts</div>
                  </div>
                  } */}
                  <Popup
                    trigger={
                      <div
                        className="expandicon"
                        onClick={() => setClick(!click)}
                      >
                        <ExpandMoreIcon></ExpandMoreIcon>
                      </div>
                    }
                  >
                    <div className="user_btn">
                      <li>Payments settings</li>
                      <hr></hr>
                      <li>Accounts</li>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </AppBar>
      </div>
    </>
  );
};
export default Header;

{
  /* <p className="orgname">
                      <NotificationsIcon
                        fontSize="medium"
                        className="notificationcolor"
                      ></NotificationsIcon>
                    
                      
                      
                    </p> */
}

{
  /* <ul className="preprocessing_menu">
                      <li className="userInfo currentuser">
                        <Link>-1-1</Link>
                      </li>
                      <li>
                        <OverlayTrigger
                        rootClose
                          trigger="click"
                          placement="bottom"
                          overlay={popoverBottom}
                        >
                          <button className="userinfo-currentuser">
                            {downArrow === downArrow ? (
                              <ExpandMoreIcon />
                            ) : (
                              <ExpandLessIcon />
                            )}
                          </button>
                        </OverlayTrigger>
                      </li>
                    </ul> */
}
