import React from "react";
import { Flex, Box, Link, Image, Tag, HStack, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Trick, useImageFromUrlQuery } from "../generated/graphql";

interface TrickCardProps {
  trick: Trick;
}

const TrickCard = (props: TrickCardProps) => {
  const { data, error, loading } = useImageFromUrlQuery({
    variables: { _url: props.trick.url },
  });

  return (
    <Flex rounded="lg" margin="4px">
      <Box>
        <Image
          height="auto"
          width="100px"
          maxHeight="100px"
          src={!loading && !error && data.imageFromUrlResolver.image}
        />
      </Box>
      <Flex flexDirection="column" ml={{ md: 2 }}>
        <HStack m="2px">
          <Heading m="2px" size="sm">
            <NextLink href="/trick/[pid]" as={`/trick/${props.trick._id}`}>
              <Link>{props.trick.title}</Link>
            </NextLink>
          </Heading>
          <Link href={props.trick.url} isExternal>
            <FaExternalLinkAlt />
          </Link>
        </HStack>
        <Text m="2px" fontSize="sm">Categories</Text>
        <HStack>
          {props.trick.categories?.map((category) => (
            <Tag key={category} m="2px" p="2px" size="sm">
              {category}
            </Tag>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TrickCard;
