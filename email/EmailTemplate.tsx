import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/components";

interface EmailTemplateProps {
  message: string;
  senderEmail: string;
}

const EmailTemplate = ({ message, senderEmail }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100" > 
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md " >
              <Heading className="leading-tight text-2xl ">
                You have received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
