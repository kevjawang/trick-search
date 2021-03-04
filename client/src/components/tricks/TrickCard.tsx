import React, { useEffect } from "react";
import { Flex, Box, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Trick, useImageFromUrlQuery } from "../../generated/graphql";

interface TrickCardProps {
  trick: Trick;
}

const TrickCard = (props: TrickCardProps) => {
  const { data, error, loading } = useImageFromUrlQuery({
    variables: { _url: props.trick.url },
  });

  return (
    <Flex rounded="lg" p="10px">
      <Box>
        <Image
          rounded="lg"
          width={{ md: 150 }}
          src={!loading && !error && data.imageFromUrlResolver.image}
        />
      </Box>
      <Flex flexDirection="column" ml={{ md: 2 }}>
        <Box mt={{ base: 4, md: 0 }}>
          <Box mt={1} display="block">
            <NextLink href="/trick/[pid]" as={`/trick/${props.trick._id}`}>
              <Link>{props.trick.title}</Link>
            </NextLink>
            <NextLink href={props.trick.url}>
              <Link isExternal pl="1">
                <FaExternalLinkAlt />
              </Link>
            </NextLink>
          </Box>
        </Box>
        <Box mt={1}>
          {/* TODO: i18n */}
          Categories
        </Box>
        <Flex direction="row">
          {props.trick.categories?.map((category) => (
            <Box key={category}>{category}</Box>
          ))}
        </Flex>
        <Box mt={1}>Tags</Box>
        <Flex direction="row">
          {props.trick.trick_tags?.map((tag) => (
            <Box key={tag}>{tag}</Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TrickCard;
