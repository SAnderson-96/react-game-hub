import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import anime from "animejs";
import { useState } from "react";
const moonPath =
  "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
const circlePath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [toggleState, setToggleState] = useState(colorMode === "dark");
  const toggleDark = () => {
    const timeline = anime.timeline({
      duration: 750,
      easing: "easeOutExpo",
    });
    morphTo(timeline, toggleState);
    setToggleState(!toggleState);
    toggleColorMode();
  };

  return (
    <HStack>
      <svg
        id="darkMode"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleDark}
      >
        {toggleState === false ? (
          <path
            className="circle"
            d="M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z"
            fill="#FFC700"
          />
        ) : (
          <path
            className="circle"
            d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
            fill="#FFC700"
          />
        )}
      </svg>
    </HStack>
  );
}

function morphTo(timeline: any, toggler: boolean) {
  timeline
    .add({
      targets: ".circle",
      d: [{ value: toggler ? circlePath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggler ? 40 : 320,
      },
      "-=700"
    )
    .add(
      {
        targets: ".scene",
        backgroundColor: toggler ? "#f1f1f1" : "#333",
      },
      "-=700"
    );
}

export default ColorModeSwitch;
