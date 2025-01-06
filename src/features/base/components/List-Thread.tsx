import { Box } from "@chakra-ui/react";
import { Thread } from "./Thread";
import { ThreadDTO } from "../../../dto/thread-DTO";

export default function ListThreads({ threads }: { threads: ThreadDTO[] }) {
  return (
    <Box>
      {(threads || []).length != 0 &&
        threads?.map((thread) => {
          return <Thread thread={thread} key={thread?.id}></Thread>;
        })}
    </Box>
  );
}
