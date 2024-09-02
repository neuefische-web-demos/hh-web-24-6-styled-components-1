import Button from "@/components/Button";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Button>Click me!!!</Button>
      <Button>Click me too</Button>
      <MyLink href={""}>A styled link.</MyLink>
    </>
  );
}

const MyLink = styled(Link)`
  color: black;
  padding-inline: 2rem;
`;
