import {
  ActionIcon,
  BackgroundImage,
  Button,
  Flex,
  Group,
  NumberInputHandlers,
  Stack,
  Text,
  createStyles,
} from "@mantine/core";
import { useRef, useState } from "react";
//@ts-ignore
import FlipCountdown from "@rumess/react-flip-countdown";
const useStyles = createStyles((theme) => ({
  img: {
    width: "44.82px",
    height: "42px",
  },
  title: {
    color: "#45516D",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  subTxt: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 700,
  },
  inputStyle: {
    backgroundColor: "transparent",
    color: "#45516D",
    fontFamily: "Inter",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  btnStyle: {
    color: "#45516D", // Color value should be enclosed in double quotes
    fontFamily: "Inter",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  ticketBuy: {
    backgroundColor: "#F5B331", // Set the background color for the button
    color: "white", // Set the text color for the button
    fontFamily: "Inter",

    lineHeight: "normal",
    padding: "10px 20px", // Add padding to the button for better spacing

    cursor: "pointer", // Change cursor to pointer on hover
    transition: "background-color 0.3s, color 0.3s", // Add transition for smooth color change
    "&:hover": {
      backgroundColor: "#FFC342", // Change background color on hover
    },
    "&:active": {
      backgroundColor: "#FFC342", // Change background color on press
    },
  },
  timerContainer: {
    borderRadius: "15px",
    background: `linear-gradient(180deg, #C0BFBF 37.94%, rgba(119, 114, 114, 0.00) 100%)`,
    width: "370.022px",
    height: "129px"
  }, raffleTitle: {
    color: "#45516D",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
  }
}));

const Home = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState<number | "">(1);
  const handlers = useRef<NumberInputHandlers>();
  return (
    <Flex w={"115%"} h={"100%"} justify={"center"} align={"center"} p={0}>
      <BackgroundImage
        mih={370}
        miw={"100%"}
        src="/assets/imgs/background.png"
        radius="md"
        p={30}
      >
        <Flex w={"100%"} justify={"space-between"}>
          <Stack maw={"35%"}>
            <Group>
              <img src="/assets/imgs/atoz.png" className={classes.img} />
              <Text className={classes.title}>5K SOUL WEEKLY RAFFLE</Text>
            </Group>
            <Text className={classes.subTxt}>
              Wager to collect raffle tickets, where you dont have to be a whale
              to win. With every 5000 wagered you earn one raffle ticket.
              Winners drawn on Discord every Sunday at 12:00 am UTC.
            </Text>
            <Text className={classes.subTxt}>
              {" "}
              You have earned 0 raffle tickets.
            </Text>
            <Flex w={"100%"} justify={"flex-start"} align={"center"} gap={4}>
              <Group spacing={5} position="apart">
                <ActionIcon
                  className={classes.btnStyle}
                  size={42}
                  variant="transparent"
                  onClick={() => {
                    if (Number(value) > 1) {
                      setValue(Number(value) - 1);
                    }
                  }}
                >
                  –
                </ActionIcon>

                <Text className={classes.inputStyle}>{value}</Text>
                <ActionIcon
                  className={classes.btnStyle}
                  size={42}
                  variant="transparent"
                  onClick={() => {
                    setValue(Number(value) + 1);
                  }}
                >
                  +
                </ActionIcon>
              </Group>
              <Button radius={"lg"} className={classes.ticketBuy}>
                Buy Ticket
              </Button>
            </Flex>
          </Stack>
          <Stack>
            <Group>
              <img src="/assets/imgs/atoz.png" className={classes.img} />
              <Text className={classes.title}>POOL 4832 SOUL</Text>
            </Group>
            <Flex justify={"center"} direction={"column"} align={"center"} className={classes.timerContainer} gap={10}>
              <Text className={classes.raffleTitle}>WEEKLY RAFFLE ENDS IN</Text>
              <FlipCountdown
                hideYear
                hideMonth
                size="small"
                titlePosition="bottom" // Options (Default: top): top, bottom.
                endAt={"2023-12-12 01:26:58"} // Date/Time
              />
            </Flex>
          </Stack>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};

export default Home;
