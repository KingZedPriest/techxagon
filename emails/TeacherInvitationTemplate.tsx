import { Body, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

type InviteEmailProps = {
  password?: string;
}

export default function TeacherInvitationTemplate({ password }: InviteEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src={`https://res.cloudinary.com/dpmx02shl/image/upload/v1718123660/Techxagon/logo-bgRemoved_wrfhxl.png`}
                width="75"
                height="75"
                alt="Logo"
                style={image}
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Welcome</Heading>
              <Text style={mainText}>
                Welcome to our tutoring management platform. Your account has been successfully created by the administrator.
                We invite you to log in and set up your tutor profile. Once logged in, you can:</Text>
                <ul>
                    <li style={list}>Manage your student roster</li>
                    <li style={list}>Add and organize exams and tests</li>
                    <li style={list}>Take attendance (Pending...)</li>
                </ul>
                <Text style={mainText}>Should you need any assistance navigating the platform, please don't hesitate to contact our administrative team.
                We look forward to your contributions to our community.</Text>        
              <Section style={verificationSection}>
                <Text style={verifyText}>Default Password</Text>
                <Text style={codeText}>{password}</Text>
                <Text style={validityText}>
                  (Kindly Login and change this password, NOTE: This password will be demanded for during account issues)
                </Text>
              </Section>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                If you never requested for this service, kindly ignore or contact us.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was produced and distributed by Wonder Services. {" "}
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
  textAlign: "center" as const,
  padding: "20px 0",
};

const image = {
  display: "block",
  margin: "0 auto",
};

const list ={
    margin: "0.3rem 0",
    color: "#592F1A",
    fontWeight: "600",
}

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
  fontSize: "24px",
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
