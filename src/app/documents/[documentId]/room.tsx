"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useSearchParam } from "@/hooks/use-search-param";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams()
  
    return (
    <LiveblocksProvider publicApiKey={"pk_dev_2Oynm6RYOWYoLM1MjQFcIsXJI6fx_BNRO636-YgUZk6mlgSXlycymJIlnNTnE2RI"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}