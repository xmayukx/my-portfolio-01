import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>New message from your portfolio site.</Preview>
      <Tailwind>
        <Body className="bg-black text-white border my-10 px-10 py-4 rounded-lg">
          <Container>
            <Heading className="leading-tight text-white">
              You received the following message from contact form.
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender's email is :{senderEmail}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
