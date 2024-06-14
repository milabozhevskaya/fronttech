import type { FC } from "react";

import { Container, rem } from "@mantine/core";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <main
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Container style={{ width: "90%" }} pos={"relative"} m="0 auto" maw={rem("1200px")}>
      {children}
    </Container>
  </main>
);
