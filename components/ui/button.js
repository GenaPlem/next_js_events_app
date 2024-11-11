import Link from "next/link";

export default function Button(props) {
  return <Link href={props.link}>{props.children}</Link>;
}
