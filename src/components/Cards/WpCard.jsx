import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import WhatsAppHr from "../Hr/WhatsAppHr";
const WpCard = ({ imagePath, title, description }) => {
  return (
    <>
      <div className="hidden sm:flex">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          className="hidden w-[90%] mx-auto"
        >
          <img
            className="w-[30vw]  sm:w-[20vw]"
            src={imagePath}
            alt="WhatsApp Mentorluk"
          />

          <Stack className="w-full mx-3 sm:mx-10 mt-4 sm:mt-0 flex flex-col justify-center items-center gap-[20%]">
            <CardBody>
              <Heading
                className="w-full text-3xl sm:text-5xl flex justify-center"
                size="md"
              >
                {title}
              </Heading>

              <Text className="flex justify-center mx-auto" py="2">
                {description}
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                className="bg-[#4d73f8] p-3 rounded-md"
                variant="solid"
                colorScheme="blue"
              >
                Danışmanlık Al
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </div>
      <div className="flex sm:hidden">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={imagePath}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack
              className="mx-auto w-full flex flex-col justify-center items-start"
              mt="6"
            >
              <Heading className="text-[1rem] mx-auto text-black font-bold	">
                {title}
              </Heading>
              <Text className="text-2xl text-gray-400 font-extralight">
                {description}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup className="w-full" spacing="2">
              <button className="bg-black text-white w-[90%] mx-auto p-2 rounded-md">
                <a className="no-underline text-white" href="/">
                  Danışmanık Al
                </a>
              </button>
            </ButtonGroup>
          </CardFooter>
          <Divider />
          <WhatsAppHr />
        </Card>
      </div>
    </>
  );
};

export default WpCard;
