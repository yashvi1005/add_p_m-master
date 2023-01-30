import {
  Button,
  Typography,
  Popover,
  Drawer,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useContext, useState } from "react";
import style from "./list.module.css";
import {
  Switches,
  CustomActionCell,
  CustomPackagePrice,
  CustomDefaultPackageCell,
  CustomDeleteIcon,
} from "./CustomCell";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { noteContext } from "../App";

const columns = [
  {
    field: "packagename",
    headerName: "PACKAGE NAME",
    width: 150,
  },
  {
    field: "description",
    headerName: "DESCRIPTION",
    width: 150,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "packagetype",
    headerName: "PACKAGE TYPE",
    width: 150,
  },
  {
    field: "trialdays",
    headerName: "TRIAL DAYS",
    width: 140,
  },
  {
    field: "defaultpackage",
    headerName: "DEFAULT PACKAGE",
    renderCell: () => <CustomDefaultPackageCell />,
    width: 130,
  },
  {
    field: "packageprice",
    headerName: "PACKAGE PRICE",
    renderCell: () => <CustomPackagePrice />,
    width: 170,
  },
  {
    field: "enable/disable",
    headerName: "ENABLE/DISABLE",
    renderCell: () => <Switches />,
    width: 150,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 160,
    renderCell: CustomActionCell,
  },
];

const List = (props) => {
  const { open1, setOpen1, currency, setcurrency, currentData, data, setdata } =
    useContext(noteContext);

  const deleteCurrency = (e, index) => {
    // const newCurrency = currency.filter((currencyData) => {
    //   return currencyData.id !== id;
    // });
    // setcurrency(newCurrency);

    setcurrency((oldvalues) => {
      return oldvalues.filter((_, i) => i, index);
    });
  };

  const onCurrencyChange = (e, index) => {
    const array = [...currency];
    array[index].packageCurrency = e.target.value;
    setcurrency(array);
  };

  const onIntervalType = (e, index) => {
    const array = [...currency];
    array[index].intervalType = e.target.value;
    setcurrency(array);
  };

  const onPriceChange = (e, index) => {
    const array = [...currency];
    array[index].price = e.target.value;
    setcurrency(array);
  };

  const handleCurrencySubmit = async (e) => {
    e.preventDefault();
    if (
      currency.packageCurrency === "" ||
      currency.intervalType === "" ||
      currency.price === ""
    ) {
      window.alert("All Field are mandatory");
    } else {
      setcurrency([
        ...currency,
        {
          packageCurrency: "",
          intervalType: "",
          price: "",
          id: currency.length,
        },
      ]);
    }
  };

  const [dataArray, setDataArray] = useState([]);
  const saveData = (newData) => {
    setDataArray([...dataArray, newData]);
  };
  const onChange1 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.packagename === "" ||
      data.description === "" ||
      data.packagetype === "" ||
      data.trialdays === ""
    ) {
      alert("field is empty!!");
    } else {
      saveData({ ...data, id: dataArray.length + 1 });
      handleClose1();
      setdata(
        data.packagename === "" &&
          data.description === "" &&
          data.packagetype === "" &&
          data.trialdays === ""
      );
    }
  };

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleOpen1() {
    setAnchorEl(false);
    setdata({});
    setOpen1(true);
  }

  function handleClose1() {
    setOpen1(false);
    setAnchorEl(false);
  }

  const [accept, setaccept] = useState(false);

  const handleChange = (e) => {
    setaccept(e.target.checked);
  };

  return (
    <>
      <div className={style["main"]}>
        <span style={{ float: "left" }}>
          <Typography variant="h5">Package List</Typography>
        </span>
        <span style={{ float: "right" }}>
          <Button
            style={{
              color: "#866afb",
              width: "120px",
              height: "50px",
              borderRadius: "5px",
              borderColor: "#866afb",
            }}
            onClick={handleClick}
            variant="outlined"
            disableElevation
            disableRipple
          >
            Actions
            <ExpandMoreIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div style={{ listStyle: "none", fontSize: "18px" }}>
                <Button
                  disableRipple
                  onClick={handleOpen1}
                  style={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  Add Package
                </Button>
                <br></br>
                <Button
                  disableRipple
                  onClick={handleOpen1}
                  style={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  Export to PDF
                </Button>
                <br></br>
                <Button
                  disableRipple
                  onClick={handleOpen1}
                  style={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "15px",
                  }}
                >
                  Export to Excel
                </Button>
                {/* <li style={{ marginTop: "10px",fontSize:"14px" }}>Export to PDF</li>
                <li style={{ marginTop: "10px" }}>Export to Excel</li> */}
              </div>
            </Typography>
          </Popover>
          <Drawer anchor={"right"} open={open1} onClose={handleClose1}>
            <div style={{ margin: "20px" }}>
              {console.log("269", data)}
              <Typography
                variant="h6"
                style={{ width: "600px", fontWeight: "bold" }}
              >
                Add New Package
              </Typography>
              <Divider sx={{ width: "600px", marginTop: "10px" }}></Divider>
              <form saveData={saveData}>
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
                  className={style["description"]}
                  sx={{ marginTop: "5px" }}
                  placeholder="Enter description"
                  multiline
                  rows={4}
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
                    control={
                      <Checkbox checked={accept} onChange={handleChange} />
                    }
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
                        // onChange={onChange1}
                        value="custom"
                        name="custom"
                      >
                        Custom
                      </option>
                      <option
                        className={style["options"]}
                        // onChange={onChange1}
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
                <form>
                  <div>
                    {currency?.map((data, index) => {
                      return (
                        <>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "20px",
                            }}
                          >
                            <span>
                              <label for="package">Package Currency</label>
                              <br />
                              <select
                                onChange={(e) => onCurrencyChange(e, index)}
                                name="packageCurrency"
                                value={data.packageCurrency}
                                className={style["last_opt"]}
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
                                  value="Dhiram"
                                >
                                  Dhiram
                                </option>
                                <option
                                  className={style["options"]}
                                  value="Euro"
                                >
                                  Euro
                                </option>
                                <option
                                  className={style["options"]}
                                  value="US Dollar"
                                >
                                  US Dollar
                                </option>
                                <option
                                  className={style["options"]}
                                  value="Indian Ruppes"
                                >
                                  Indian Ruppes
                                </option>
                              </select>
                            </span>
                            <span>
                              <label for="cars">Interval Type</label>
                              <br />
                              <select
                                onChange={(e) => onIntervalType(e, index)}
                                name="intervalType"
                                value={data.intervalType}
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
                                <option
                                  className={style["options"]}
                                  value="Yearly"
                                >
                                  Yearly
                                </option>
                                <option
                                  className={style["options"]}
                                  value="Monthly"
                                >
                                  Monthly
                                </option>
                              </select>
                            </span>
                            <span style={{ marginLeft: "10px" }}>
                              Trial Days
                              <br></br>
                              <input
                                name="price"
                                onChange={(e) => onPriceChange(e, index)}
                                value={data.price}
                                className={style["price"]}
                                type="number"
                                placeholder="Enter Price"
                              />
                              <span>
                                <DeleteOutlineIcon
                                  onClick={() => deleteCurrency(index)}
                                  sx={{
                                    color: "red",
                                    marginLeft: "5px",
                                    marginTop: "5px",
                                  }}
                                />
                              </span>
                            </span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div>
                    <Button
                      onClick={handleCurrencySubmit}
                      variant="contained"
                      className={style["add_currency"]}
                      disableRipple
                    >
                      Add Currency
                    </Button>
                    {/* )} */}
                  </div>
                </form>
                <p></p>
                <Divider
                  sx={{
                    borderColor: "#d7d4d4",
                    marginTop: "100px",
                  }}
                />
                <div style={{ float: "right", marginTop: "10px" }}>
                  <Button
                    onClick={handleClose1}
                    className={style["close"]}
                    variant="outlined"
                  >
                    Close
                  </Button>
                  <Button onClick={handleSubmit} className={style["add"]}>
                    Add
                  </Button>
                </div>
              </form>
            </div>
          </Drawer>
          {/* <Drawer1 handleClose1={handleClose1} handleOpen1={handleOpen1} test={"test"} /> */}
        </span>

        <Box sx={{ height: 400, width: "100%", marginTop: "60px" }}>
          <DataGrid
            rows={dataArray}
            columns={columns}
            disableColumnMenu
            disableColumnFilter
            checkboxSelection
            disableSelectionOnClick
            FilterPanel="false"
            hideFooterPagination="true"
            experimentalFeatures={{ newEditingApi: true }}
            hideFooterSelectedRowCount
          />
        </Box>
      </div>
    </>
  );
};

export default List;
