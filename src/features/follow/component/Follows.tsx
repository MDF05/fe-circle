import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiV1 } from "./../../../lib/api-v1";
import FollowComponent from "../../../component/Follow";

export default function FollowsFeatures({ location }: { location: string }) {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await apiV1.get("/profile");
        setProfiles(res.data.data);
      } catch (err) {
        setProfiles([]);
        console.log(err);
      }
    })();
  }, []);

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      background={
        location != "follows" ? "brand.backgroundYoung" : "transparent"
      }
      color="white"
      rounded={"10px"}
    >
      <Flex padding={"10px"}> Suggested For You </Flex>
      {profiles.map((profile) => {
        return (
          <FollowComponent
            location={location}
            profile={profile}
            key={profile.id}
          ></FollowComponent>
        );
      })}
    </Flex>
  );
}
