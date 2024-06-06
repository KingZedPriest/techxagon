import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  type VerifyEmailProps = {
    verificationCode?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export default function LoginAuthenticationTemplate({ verificationCode }: VerifyEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>Authentication and Verification</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={coverSection}>
              <Section style={imageSection}>
                <Img
                  src={`${baseUrl}/static/aws-logo.png`}
                  width="75"
                  height="45"
                  alt="AWS's Logo"
                />
              </Section>
              <Section style={upperSection}>
                <Heading style={h1}>Verify your email address</Heading>
                <Text style={mainText}>
                    At our organization, we prioritize security and user experience. 
                    To strike the right balance between these two critical aspects, we have implemented this verification code authentication system. 
                    To log in to your account, please enter the verification code provided below.
                </Text>
                <Section style={verificationSection}>
                  <Text style={verifyText}>Verification code</Text>
  
                  <Text style={codeText}>{verificationCode}</Text>
                  <Text style={validityText}>
                    (This code is valid for 10 minutes)
                  </Text>
                </Section>
              </Section>
              <Hr />
              <Section style={lowerSection}>
                <Text style={cautionText}>
                  If you never requested for this service, kindly contact us, if you think your account has been compromised
                </Text>
              </Section>
            </Section>
            <Text style={footerText}>
              This message was produced and distributed by Techxagon Services,
              Inc., 410 Terry Ave. North, Seattle, WA 98109. © 2024, Techxagon
              Services, Inc.. All rights reserved. For more information kindly visit our website
              <Link href="" target="_blank" style={link}>
                Techxagon.com
              </Link>
              or out LinkedIn account {" "}
              <Link href="" target="_blank" style={link}>
                LinkedIn Account
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
  
  const main = {
    backgroundColor: "#fff",
    color: "#212121",
  };
  
  const container = {
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#eee",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const imageSection = {
    backgroundColor: "#252f3d",
    display: "flex",
    padding: "20px 0",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const coverSection = { backgroundColor: "#fff" };
  
  const upperSection = { padding: "25px 35px" };
  
  const lowerSection = { padding: "25px 35px" };
  
  const footerText = {
    ...text,
    fontSize: "12px",
    padding: "0 20px",
  };
  
  const verifyText = {
    ...text,
    margin: 0,
    fontWeight: "bold",
    textAlign: "center" as const,
  };
  
  const codeText = {
    ...text,
    fontWeight: "bold",
    fontSize: "36px",
    margin: "10px 0",
    textAlign: "center" as const,
  };
  
  const validityText = {
    ...text,
    margin: "0px",
    textAlign: "center" as const,
  };
  
  const verificationSection = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  const mainText = { ...text, marginBottom: "14px" };
  
  const cautionText = { ...text, margin: "0px" };
  