import Head from "next/head";

const SITE_URL = "https://ladderdesigns.netlify.app";

const DEFAULT_DESCRIPTION =
  "Ladder Designs is a website design and development agency that builds high-quality educational resources for educators and students.";

interface Props {
  title: string;
  path: string;
  description?: string;
  noIndex?: boolean;
}

const Meta = ({
  title,
  path,
  description = DEFAULT_DESCRIPTION,
  noIndex = false,
}: Props) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  );
};

export default Meta;
