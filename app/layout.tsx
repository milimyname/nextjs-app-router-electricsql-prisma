import "./style.css";
import "./App.css";
import { Providers } from "./providers";
import Image from "next/image";

export const metadata = {
  title: `Next.js Forms Example`,
  description: `Example application with forms and Postgres.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <header className="App-header">
            <Image
              src="/logo.svg"
              width={200}
              height={200}
              className="App-logo"
              alt="logo"
            />
            <Providers>{children}</Providers>
          </header>
        </div>
      </body>
    </html>
  );
}
