import { Button, Group, Header, createStyles } from "@mantine/core";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#FFFF",
        padding: 20,
        // borderBottom: "0.25rem #DADADA solid",
    },
    confirmButton: {
        backgroundColor: "#24243e",
    },
}));

const MainHeader = () => {
    const { classes, cx } = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { width } = useViewportSize();
    const router = useRouter();
    const { connected, publicKey } = useWallet();
    const adminWallet = "SoULkUw8WRdZKNT1FhMtCUDggDXCagHtdEFQAmGuM7Z";
    //const adminWallet="Hx5oruS1xKhHVjdHnbvLPQnJwyCAwd6QzzJ6yPnoqgP8"
    return (
        <Header
            w={width * 0.67}
            height={90}
            p={20}
            className={classes.header}
            
            styles={{
                // border: {
                //     color: "#DADADA",
                //     borderWidth: "1.2rem",
                // },
            }}
        >
            <Link href={"/"}>
                <Image
                    src={"/assets/imgs/atoz.png"}
                    alt="Atoz"
                    width={80}
                    height={80}
                    style={{ padding: 10 }}
                />
            </Link>
            <Group>
                {connected && publicKey?.toBase58() == adminWallet && (
                    <Button
                        onClick={() => {
                            router.push("/admin");
                        }}
                        size="lg"
                        color="red"
                        radius={"md"}
                        style={{ backgroundColor: "#ff3200" }}
                    >
                        Admin
                    </Button>
                )}

                <WalletMultiButton />
            </Group>
        </Header>
    );
};
export default MainHeader;
