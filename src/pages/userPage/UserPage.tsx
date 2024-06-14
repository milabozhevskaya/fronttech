import { Button, Stack, Text, Avatar, Group, Paper } from "@mantine/core";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { logout } from "@/store/action-creators/user";

export const UserPage = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      w="70%"
      maw={"520px"}
      pos="relative"
      m={"0 auto"}
    >
      <Text size="xl" component="h3" mb="lg">
        Hello, {currentUser?.displayName || "user"}!
      </Text>
      <div>
        <Group wrap="nowrap">
          <Avatar src={currentUser?.photoURL || ""} size={94} radius="md" />
          <Stack>
            <Text component="span" fz="lg" fw={500}>
              {currentUser?.displayName || "user"}
            </Text>
            <Text fz="xs" c="dimmed">
              {currentUser?.email || "your_email"}
            </Text>
          </Stack>
        </Group>
      </div>

      <Button onClick={logOut}>Sign Out</Button>
    </Paper>
  );
};
