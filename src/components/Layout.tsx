import { Flex } from "@mantine/core";
import React from "react";
import MainHeader from "./MainHeader";
import { useViewportSize } from "@mantine/hooks";

const Layout = ({ children }: { children: any }) => {
    const { width, height } = useViewportSize();
    return (
        <Flex direction={"column"} justify={"center"} align={"center"}   >
            <Flex maw={1139} direction={"column"} justify={"center"} align={"center"} py={10} gap={10}>
                <MainHeader />
                {children}
            </Flex>
        </Flex>
    );
};

export default Layout;
