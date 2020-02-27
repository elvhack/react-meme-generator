import React from "react";
import "./styles.css";

interface Props {
  text: string;
}

export default function Subtitle(props: Props) {
  return <div className="subtitle">{props.text}</div>;
}
