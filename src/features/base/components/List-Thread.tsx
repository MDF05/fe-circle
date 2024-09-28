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

//       <Box
//         px="20px"
//         py="20px"
//         borderBottom="1px solid grey"
//         color="white"
//         key={thread.id}
//       >
//         <Box
//           display="grid"
//           gap="20px"
//           boxSizing="border-box"
//           gridTemplateColumns={"40px Calc(100% - 60px)"}
//         >
//           <ChakraLink to="/profile" rounded={"full"}>
//             <Image
//               src={thread.profile.image as string}
//               h={"40px"}
//               w={"40px"}
//               rounded={"full"}
//             />
//           </ChakraLink>
//           <Box display="flex" flexDirection="column" gap="15px">
//             <Flex gap="5px">
//               <Text>{thread.profile.fullName} </Text>
//               <Text color="grey"> @{thread.profile.username} </Text>
//               <Text color="grey"> • </Text>
//               <Text color="grey"> {agePost}</Text>
//             </Flex>
//             <Flex gap={"20px"} flexDir={"column"}>
//               <Text>{thread.text}</Text>
//               {thread.image && (
//                 <Image
//                   src={`http://localhost:3000/assets/${thread.image}`}
//                 />
//               )}
//             </Flex>
//             <Flex gap="20px" color={"grey"}>
//               <Flex as={"form"} alignItems={"center"} gap={"5px"}>
//                 {thread.id ? (
//                   <Box as="button" type="submit">
//                     <Icon
//                       as={FaHeart}
//                       fontSize="1.5rem"
//                       color="red"
//                       cursor="pointer"
//                     ></Icon>
//                   </Box>
//                 ) : (
//                   <Box as="button" type="submit">
//                     <Icon
//                       as={FaRegHeart}
//                       fontSize="1.5rem"
//                       color="grey"
//                       cursor="pointer"
//                     ></Icon>
//                   </Box>
//                 )}
//                 {thread._count.like}
//               </Flex>
//               <Flex alignItems={"center"} gap={"5px"}>
//                 <ChakraLink
//                   to={`/thread/${thread.id}`}
//                   state={{ id: `${thread.id}` }}
//                   display={"grid"}
//                   alignItems={"center"}
//                 >
//                   <Icon
//                     as={TbMessage2}
//                     fontSize="1.5rem"
//                     color="grey"
//                     cursor="pointer"
//                   ></Icon>
//                 </ChakraLink>
//                 {thread._count.replies}
//               </Flex>
//             </Flex>
//           </Box>
//         </Box>
//       </Box>
