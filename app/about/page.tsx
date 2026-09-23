import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 px-4 text-center">
      <span className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700">
        Server Component
      </span>

      <h1 className="text-3xl font-bold text-gray-800">About 페이지</h1>

      <p className="max-w-xl text-gray-600 leading-relaxed">
        이 페이지는 app/about/page.tsx 파일 하나로 만들어졌습니다.
        폴더 이름이 곧 URL 경로가 되는 File-based Routing 예시입니다.
      </p>

      <Link
        href="/"
        className="text-sm font-medium underline text-gray-900 hover:text-gray-600"
      >
        ← 홈으로 돌아가기
      </Link>
    </main>
  );
}