import Link from "next/link";
import { Counter } from '@/components/Counter'

export default function Home() {
  return (
    <main>
      <h1>웹서버보안프로그래밍 - 3주차</h1>
      <Counter />
      <Link href="/about">/about 페이지로 이동 →</Link>
    </main>
  )
}