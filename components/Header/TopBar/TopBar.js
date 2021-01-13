import { Container, Grid, Image, Input } from "semantic-ui-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

//Logo
function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/letras.png" alt="Gaiming" />
      </a>
    </Link>
  );
}

//Buscador
function Search() {
  return <Input id="search-game" icon={{ name: "search" }} />;
}
