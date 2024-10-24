import dynamic from 'next/dynamic'
import "bootstrap/dist/css/bootstrap.min.css";

const Home1 = dynamic(
    () => import("../components/Home1"),
    { ssr: false }
  )

export default function Home() {
  return (
   <Home1 />
  );
}
