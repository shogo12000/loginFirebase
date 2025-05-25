import { textFieldStyles } from "../AllClass";
import { TextField } from "@mui/material";

export default function TextFieldForm({
  id,
  placeholder,
  type,
  value,
  setUserForm,
}) {
  return (
    <TextField
      id={id}
      name={id}
      placeholder={placeholder}
      type={type}
      variant="outlined"
      value={value}
      onChange={(e) => setUserForm((x) => ({ ...x, [e.target.name]: e.target.value }))}
      sx={textFieldStyles}
    />
  );
}
