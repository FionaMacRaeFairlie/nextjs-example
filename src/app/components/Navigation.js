import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="contents">Contents</Link>
        <Link href="about">About Us</Link>
        <Link href="contactus">Contact Us</Link>
      </nav>
     
    </>
  );
};
export default Navigation;