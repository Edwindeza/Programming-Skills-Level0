import Head from "next/head";
import styles from "./globals.module.css";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Challenge 1</title>
      </Head>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
