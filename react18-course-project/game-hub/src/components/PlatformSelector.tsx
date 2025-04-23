import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem
            onClick={() => setPlatformId(p.id)}
            key={p.id}
            fontWeight={p.id === selectedPlatformId ? "bold" : "normal"}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
