import React from "react";
import "./styles.css";

interface Props {
  text: string;
}

export default function Title(props: Props) {
  return <h1 className="title"> {props.text} </h1>;
}
