import Platform from "../models/game/platform";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaLinux,
} from "react-icons/fa";

import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
