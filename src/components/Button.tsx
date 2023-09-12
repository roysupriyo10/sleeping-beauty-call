import { Component } from "solid-js";

interface ButtonProps {
  name: string;
}

const Button: Component<ButtonProps> = props => (
  <button class="rounded-full bg-rose-300 py-4 px-6">Call sleeping {props.name}</button>
)

export default Button;
