"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { likeProductAction } from "@/lib/actions";

type LikeButtonProps = {
  id: string;
  initialLikes: number;
};

export function LikeButton({ id, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const newLikes = await likeProductAction(id);
          if (newLikes !== null) {
            setLikes(newLikes);
          }
        });
      }}
    >
      {isPending ? "저장 중..." : `♥ 좋아요 ${likes}`}
    </Button>
  );
}
