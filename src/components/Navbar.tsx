import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function Navbar() {
  return (
    <HStack justifyContent="space-between" padding={10}>
      <Image src={logo} boxSize={16} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
