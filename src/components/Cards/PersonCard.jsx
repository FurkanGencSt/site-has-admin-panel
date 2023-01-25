import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PersonCard = (props) => {
  return (
    <div className="flex flex-col md:hidden o ">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={props.photoPath}
            alt="O Erkek Ol"
            borderRadius="lg"
            className="w-[90%] mx-auto"
          />
          <Stack mt="6" spacing="3">
            <Heading className="mx-auto" size="md">
              {props.title}
            </Heading>
            <Text className=" mx-auto">{props.description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default PersonCard;
