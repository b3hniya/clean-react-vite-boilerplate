type Props = {
  text: string;
};

export function Button(props: Props) {
  return <button> {props.text} </button>;
}
