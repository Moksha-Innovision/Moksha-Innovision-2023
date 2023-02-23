import Head from "next/head";
import Dashboard from "../components/dashboard/ui/Dashboard";
type Props = {};

const profile = (props: Props) => {
  return (
    <>
      <Head>
        <title>Moksha Innovision&apos;23 | Profile</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Dashboard />
    </>
  );
};

export default profile;
