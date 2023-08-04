const listinput = [
  { label: "Name", 
    name: "input1", 
    value: "", 
    error: "name must be string." 
  },
  {
    label: "Email",
    name: "email",
    value: "",
    type: "Email",
    error: "must be a valid email.",
  },
  {
    label: "Phone",
    name: "phone",
    value: "",
    type: "Phone",
    error: "must be a valid phone number.",
  },
  {
    label: "Credit card",
    name: "number",
    value: "",
    type: "Num",
    error: "credit card must be a number.",
  },
];

export default listinput;
