import React from "react";
import "./styles.css";

interface Props {
  image: string;
  children: any;
}

export default function Background(props: Props) {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.children}
    </div>
  );
}
