import { type FC, useState } from "react";

import {
  type PaperProps,
  Anchor,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { loginWithProvider, loginWithEmailAndPassword, signup } from "../model/login";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { googleProvider } from "@/integrations/firebase/firebase";
import { GoogleButton, LoaderContainer } from "shared";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: FC<PaperProps> = (props) => {
  const [type, toggle] = useToggle(["login", "register"]);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { error } = useAppSelector((state) => state.userReducer);

  const { onSubmit, errors, getInputProps, clearErrors } = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
    },
  });

  const handleSubmit = async ({ email, password }: FormValues) => {
    clearErrors();
    try {
      setLoading(true);

      if (type === "register") {
        await signup({ email, password }, dispatch);
      } else {
        await loginWithEmailAndPassword(
          {
            email,
            password,
          },
          dispatch,
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        notifications.show({
          message: err.message,
          title: "Error",
          color: "red",
          autoClose: 3000,
          withBorder: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitWithGoogle = async () => {
    try {
      setLoading(true);
      await loginWithProvider(googleProvider, dispatch);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
        notifications.show({
          message: err.message,
          title: "Error with Google",
          color: "red",
          autoClose: 3000,
          withBorder: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoaderContainer isFetching={loading}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        w="70%"
        maw={"520px"}
        pos="relative"
        {...props}
      >
        <Text component="h2" size="xl" fw={700} ta="center" lh="lg" mb="lg">
          {upperFirst(type)}
        </Text>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack ta={"left"} justify="center" gap="xs">
            <TextInput
              required
              label="Email"
              placeholder="Email"
              radius="md"
              size="md"
              {...getInputProps("email")}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Password"
              radius="md"
              size="md"
              {...getInputProps("password")}
            />
            {errors.email && <Text c="red">{errors.common}</Text>}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => {
                toggle();
              }}
              size="md"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl" size="md">
              {upperFirst(type)}
            </Button>
          </Group>

          {error && <span>{error}</span>}
        </form>

        <Divider label="Or continue with" labelPosition="center" my="lg" />

        <Group grow mb="md" mt="md">
          <GoogleButton onClick={handleSubmitWithGoogle} radius="xl" size="md" p={10}>
            Google
          </GoogleButton>
        </Group>
      </Paper>
    </LoaderContainer>
  );
};
