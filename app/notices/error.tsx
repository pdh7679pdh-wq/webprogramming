"use client";

export default function NoticesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <p>공지사항을 불러오지 못했습니다.</p>
      <p>일시적인 서버/DB 연결 문제일 수 있습니다. 잠시 후 다시 시도해주세요.</p>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}