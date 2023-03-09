import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "../../App.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import MUIDataTable from "mui-datatables";
import Container from "@mui/material/Container";

const buttons = [
  <Button>General</Button>,
  <Button>Tranches </Button>,
  <Button>Fees </Button>,
  <Button>Expenses</Button>,
  <Button>Accounts</Button>,
  <Button>Tests</Button>,
  <Button>Variables</Button>,
  <Button>Payment Rules</Button>,
];

const DealCreation = () => {
  return (
    <div className="main_container">
      <div className="Deal_row">
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon
            className="arrow_btn"
            onClick={() => console.log("Hello!")}
          />
          <label style={{ fontSize: "28px" }}>Deal Creation</label>
        </div>
        <div>
          <Button
            variant="outlined"
            style={{ borderRadius: "20px", color: "#000", borderColor: "#000" }}
            onClick={() => console.log("-1-1-1-1-")}
          >
            Save for Now
          </Button>
          <Button
            variant="contained"
            style={{
              borderRadius: "20px",
              backgroundColor: "#ffc107",
              color: "#000",
              marginLeft: "12px",
            }}
            onClick={() => console.log("-2-2-2-")}
          >
            Create
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", color: "red" }}>
        <ButtonGroup
          variant="none"
          size="large"
          style={{
            padding: "1%",
            color: "#000",
          }}
        >
          {buttons}
        </ButtonGroup>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1%",
        }}
      >
        <div>
          <h3>List of Tranches</h3>
        </div>
        <div>
          <Button variant="text" style={{ color: "#20c997" }}>
            Configure
          </Button>
          <Button
            variant="contained"
            style={{
              borderRadius: "20px",
              backgroundColor: "#ffc000",
              color: "#000",
            }}
          >
            Add Tranche
          </Button>
        </div>
      </div>
      <div className="mui_table">
        <MUIDataTable
          options={{
            filter: false,
            search: false,
            viewColumns: false,
            print: false,
            download: false,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2%",
          color: "#fff",
        }}
      >
        <Button variant="text" style={{ color: "#000" }}>
          Previous
        </Button>
        <Button
          variant="contained"
          style={{
            borderRadius: "20px",
            color: "#000",
            backgroundColor: "#fff",
            border: "1px solid black",
          }}
        >
          Next
        </Button>
      </div>
    </div>
    // <>
    //   <div style={{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
    // helloo
    // </div>
    // </>
  );
};

export default DealCreation;
