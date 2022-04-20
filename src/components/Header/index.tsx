import { CHeader, Container, Input, Nav } from "./style";
import { BsSearch } from "react-icons/bs";

export function Header() {
  return (
    <CHeader>
      <Container>
        <Nav>
          <span>Codelândia</span>
          <span>blog</span>
        </Nav>
        <Input>
          <label htmlFor="inputSearch">
            <BsSearch size={24} color={`#fff`} title={`Search`} />
          </label>
          <input type="text" id="inputSearch" placeholder="Pesquisar no blog" />
        </Input>
      </Container>
    </CHeader>
  );
}
