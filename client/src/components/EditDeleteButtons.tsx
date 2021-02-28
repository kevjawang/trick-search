import React from "react";
import { Box, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useDeleteTrickMutation } from "../generated/graphql";
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";

interface EditDeleteButtonsProps {
  id: string;
}

export const EditDeleteButtons: React.FC<EditDeleteButtonsProps> = ({
  id
}) => {
  const router = useRouter();
  const [deletePost] = useDeleteTrickMutation();

  //TODO: if not auth don't show

  return (
    <Box>
      <NextLink href="/trick/edit/[pid]" as={`/trick/edit/${id}`}>
        <IconButton as={Link} mr={4} icon={<FaPen />} aria-label="Edit" />
      </NextLink>
      <IconButton
        icon={<FaTrash />}
        aria-label="Delete"
        onClick={() => {
          deletePost({
            variables: { id }
          });
          router.push("/")
        }}
      />
    </Box>
  );
};