import {
  Button,
  Divider,
  Typography,
  Switch,
  Popover,
  Drawer,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import style from "./list.module.css";
import Box from "@mui/material/Box";

const Drawer1 = ({ handleOpen1, test, handleClose1 }) => {
    console.log('first', test)
  console.log("ghfhgf");
  const [anchorEl, setAnchorEl] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [accept, setaccept] = useState(false);
  const handleChange = (e) => {
    setaccept(e.target.checked);
  };
//   function handleClose1() {
//     setOpen1(false);
//     setAnchorEl(false);
//   }
  //   function handleOpen1() {
  //     setAnchorEl(false);
  //     setOpen1(true);
  //   }
  const [data, setdata] = useState({
    packagename: "",
    description: "",
    packagetype: "",
    trialdays: "",
  });
  console.log(177, data);
  const onChange1 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.packagename === "" ||
      data.description === "" ||
      data.packagetype === "" ||
      data.trialdays === ""
    ) {
      alert("field is empty!!");
    } else {
      setdata(data);
      setdata({
        packagename: "",
        description: "",
        packagetype: "",
        trialdays: "",
      });
    }
  };
  return (
    <Drawer anchor={"right"} open={open1} onClose={handleClose1}>
      <div style={{ margin: "20px" }}>
        <Typography variant="h6" style={{ width: "600px", fontWeight: "bold" }}>
          Add New Package
        </Typography>
        <Divider sx={{ width: "600px", marginTop: "10px" }}></Divider>
        <form>
          <div style={{ marginTop: "20px" }}>Package Name</div>
          <TextField
            sx={{ marginTop: "5px" }}
            placeholder="Enter Package name"
            fullWidth
            variant="outlined"
            size="small"
            name="packagename"
            value={data.packagename}
            onChange={onChange1}
          ></TextField>
          <div style={{ marginTop: "20px" }}>Description</div>
          <TextField
            sx={{ marginTop: "5px" }}
            placeholder="Enter description"
            multiline
            rows={4}
            maxRows={4}
            fullWidth
            variant="outlined"
            size="small"
            onChange={onChange1}
            value={data.description}
            name="description"
          ></TextField>
          <box>
            <FormControlLabel
              label="Default Package"
              control={<Checkbox checked={accept} onChange={handleChange} />}
            ></FormControlLabel>
          </box>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>
              <label for="package">Package Type</label>
              <br />
              <select
                onChange={onChange1}
                value={data.packagetype}
                name="packagetype"
                className={style["package"]}
              >
                <option
                  className={style["options"]}
                  style={{ backgroundColor: "#866afb" }}
                  value=""
                >
                  Please select...
                </option>
                <option
                  className={style["options"]}
                  onChange={onChange1}
                  value="custom"
                  name="custom"
                >
                  Custom
                </option>
                <option
                  className={style["options"]}
                  onChange={onChange1}
                  value="public"
                  name="public"
                >
                  Public
                </option>
              </select>
            </span>
            <span style={{ marginLeft: "10px" }}>
              Trial Days
              <br></br>
              <input
                className={style["trial_days"]}
                type="number"
                placeholder="Enter Trial days"
                onChange={onChange1}
                name="trialdays"
                value={data.trialdays}
              />
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
            }}
          >
            <span>
              <label for="cars">Package Currency</label>
              <br />
              <select name="select" className={style["last_opt"]}>
                <option
                  className={style["options"]}
                  style={{ backgroundColor: "#866afb" }}
                  value=""
                >
                  Please select...
                </option>
                <option className={style["options"]} value="Dhiram">
                  Dhiram
                </option>
                <option className={style["options"]} value="Euro">
                  Euro
                </option>
                <option className={style["options"]} value="US Dollar">
                  US Dollar
                </option>
                <option className={style["options"]} value="Indian Ruppes">
                  Indian Ruppes
                </option>
              </select>
            </span>
            <span>
              <label for="cars">Interval Type</label>
              <br />
              <select
                name="select"
                style={{ marginLeft: "10px" }}
                className={style["last_opt"]}
              >
                <option
                  className={style["options"]}
                  style={{ backgroundColor: "#866afb" }}
                  value=""
                >
                  Please select...
                </option>
                <option className={style["options"]} value="Yearly">
                  Yearly
                </option>
                <option className={style["options"]} value="Monthly">
                  Monthly
                </option>
              </select>
            </span>
            <span style={{ marginLeft: "10px" }}>
              Trial Days
              <br></br>
              <input
                className={style["price"]}
                type="number"
                placeholder="Enter Price"
              />
            </span>
          </div>
          <Divider
            sx={{
              borderColor: "#d7d4d4",
              marginTop: "100px",
            }}
          />
          <div style={{ float: "right", marginTop: "10px" }}>
            <Button className={style["close"]} variant="outlined">
              Close
            </Button>
            <Button onClick={handleSubmit} className={style["add"]}>
              Add
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default Drawer1;
