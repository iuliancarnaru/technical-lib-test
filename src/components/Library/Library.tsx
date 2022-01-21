import {
  HeaderContainer,
  HeaderTitle,
} from "../LibraryHeader/LibraryHeader.style";
import TileList from "../TileList";

const Library = () => {
  return (
    <section>
      <HeaderContainer>
        <HeaderTitle>Library</HeaderTitle>
      </HeaderContainer>
      <TileList />
    </section>
  );
};

export default Library;
