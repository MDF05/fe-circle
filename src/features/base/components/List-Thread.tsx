import threadsEntity from "../../../entities/thread-entity";
import { Box } from "@chakra-ui/react";
import { Thread } from "./Thread";

export default function ListThreads({ threads }: { threads: threadsEntity[] }) {
  return (
    <Box>
      {threads.map((thread: threadsEntity) => {
        return <Thread thread={thread} key={thread.id}></Thread>;
      })}
    </Box>
  );
}
