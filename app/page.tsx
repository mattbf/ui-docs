import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center border-2 border-gray-200 gap-4">
      <Link href="/design-system/components"> Go to design system docs example → </Link>
      <Link href={`https://github.com/mattbf/ui-docs/tree/main`} target="_blank">
        Learn how to use the design system
      </Link>

      <div className="absolute bottom-4">
        <Link href={`https://twitter.com/matthewbf88`} target="_blank" className="text-gray-700">
          Built by Matthew
        </Link>
      </div>
    </div>
  );
}
