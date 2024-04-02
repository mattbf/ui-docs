import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <Link href="/design-system"> Go to design system docs example → </Link>
    </div>
  );
}
