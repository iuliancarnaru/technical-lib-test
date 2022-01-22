import {
  HeaderContainer,
  HeaderTitle,
} from "../LibraryHeader/LibraryHeader.style";
import TileList from "../TileList";
import { LibrarySection } from "./Library.style";

const Library = () => {
  return (
    <LibrarySection>
      <HeaderContainer>
        <HeaderTitle>Library</HeaderTitle>
      </HeaderContainer>
      <TileList />
    </LibrarySection>
  );
};

export default Library;
