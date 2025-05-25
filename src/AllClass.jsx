export const inputClass =
  "bg-yellow-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400";

export const labelOne= "mb-1 text-left text-md";

export const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "orange",
    },
  },
  "& .MuiOutlinedInput-root input": {
    padding: "16px",  
  },
  "& input::placeholder": {
    color: "gray",
    opacity: 1,
  },
  "& .Mui-focused input::placeholder": {
    color: "orange",
  },
};
 