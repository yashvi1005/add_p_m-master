import React, { useContext } from "react";
import { Switch, Button } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import style from "./list.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { noteContext } from "../App";

export const CustomActionCell = (props) => {
  const { open1, setOpen1, data, setdata, deletePackage, deleteItem } =
    useContext(noteContext);

  console.log("props", props);

  return (
    <div className={style["edit_delete"]}>
      <span className={style["email"]}>
        <span className={style["email_icon"]}>
          <BorderColorOutlinedIcon
            onClick={() => {
              // setcurrentData(props.row);
              setdata(props?.row);
              setOpen1(true);
            }}
          />
        </span>
      </span>

      <span className={style["email"]}>
        <span className={style["email_icon"]}>
          <DeleteOutlineOutlinedIcon
            sx={{ color: "#ea4335" }}
            onClick={() => {
              deleteItem(props?.row);
            }}
          />
        </span>
      </span>
    </div>
  );
};

export const Switches = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export const CustomPackagePrice = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "40px",
        width: "150px",
        color: "#866afb",
        borderColor: "#866afb",
      }}
    >
      View Price
    </Button>
  );
};

export const CustomDefaultPackageCell = () => {
  const { deletePackage } = useContext(noteContext);
  return <CheckBoxOutlinedIcon sx={{ color: "green" }} />;
};

// export const CustomDeleteIcon = () => {
//   const { deleteItem } = useContext(noteContext);
//   return <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />;
// };
