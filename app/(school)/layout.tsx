import Footer from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
}