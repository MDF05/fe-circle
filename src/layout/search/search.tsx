import {
  Box,
  Flex,
  Grid,
  Icon,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdPersonSearch } from "react-icons/md";
import { apiV1 } from "../../lib/api-v1";
import FollowComponent from "../../features/follow/component/Follow";

export default function Search() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const {
    handleSubmit,
    register,
    formState: { isSubmitted },
  } = useForm();
  const [search, setSearch] = useState<any>(undefined);

  async function handleSearch(event: any) {
    try {
      const res = await apiV1.get(`/profile/search/${event.search}`);
      setProfiles(res.data.data);
      setSearch(event.search);
    } catch (err) {
      setSearch(event.search);
      setProfiles([]);
    }
  }

  return (
    <Box>
      <Flex
        color={"white"}
        padding={"0px 10px"}
        height={"70px"}
        alignItems={"end"}
        as={"form"}
        onSubmit={handleSubmit((e) => handleSearch(e))}
      >
        <InputGroup position={"relative"}>
          <Input
            placeholder="search your friend"
            rounded={"full"}
            padding={"0px 0px 0px 40px"}
            bg={"rgba(63, 63, 63, 1)"}
            {...register("search")}
          />
          <Icon
            as={MdPersonSearch}
            width={"30px"}
            height={"30px"}
            color={"rgb(101, 114, 133)"}
            position={"absolute"}
            zIndex={"1000"}
            top={"5px"}
            left={"10px"}
          ></Icon>
        </InputGroup>
      </Flex>
      <Flex
        height={"calc(100vh - 70px)"}
        bg={"r"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {profiles.length > 0
          ? profiles.map((profile) => {
              return (
                <Grid width={"100%"} height={"calc(100vh - 70px)"} pt={"20px"}>
                  <FollowComponent
                    key={profile.id}
                    profile={profile}
                    location={"search"}
                  ></FollowComponent>
                </Grid>
              );
            })
          : search && (
              <Box width={"350px"} textAlign={"center"}>
                <Text as={"h5"}>No results "{search}"</Text>
                <Text as={"p"} color={"grey"}>
                  Try searching for something else or check the spelling of what
                  you typed.
                </Text>
              </Box>
            )}
      </Flex>
    </Box>
  );
}
