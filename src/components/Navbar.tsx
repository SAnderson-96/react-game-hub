import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="64px" />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
