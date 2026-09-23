import Link from "next/link";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 px-4 text-center">
      <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
        Server Component
      </span>

      <h1 className="text-3xl font-bold text-gray-800">
        웹서버보안프로그래밍 — 3주차
      </h1>

      <p className="max-w-xl text-gray-600 leading-relaxed">
        create-next-app으로 만든 Next.js 16 App Router 템플릿입니다.
        이 페이지는 서버에서 렌더링되고, 아래 카운터는 브라우저에서
        동작하는 별도의 Client Component입니다.
      </p>

      <Counter />

      <Link
        href="/about"
        className="text-sm font-medium underline text-gray-900 hover:text-gray-600"
      >
        /about 페이지로 이동 (파일 기반 라우팅 확인) →
      </Link>
    </main>
  );
}