import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./article.css"; // import css file
import { Typewriter } from "react-simple-typewriter";
import { collection, onSnapshot } from "firebase/firestore";
import { AiFillTags } from "react-icons/ai";
import { db } from "../../utils/firebase.utils";
const data = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "12",
  "13",
  "14",
  "15",
];
const Article = () => {
  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const style = {
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };
  useEffect(() => {
    setItems(items.concat(data.slice(items.length, items.length + 5)));
  }, []);
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(data.slice(items.length, items.length + 5)));
    }, 1500);
  };

  useEffect(() => {
//     onSnapshot(
//       collection(db, "Blog Yazıları"),
//       (snapshot) => {
//         let list = [];
//         snapshot.docs.forEach((doc) => {
//           list.push({ id: doc.Title, ...doc.data() });
//         });
//         setBlogs(list);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
  }, []);
  console.log(blogs);

  return (
    <div className="flex flex-col justify-center items-center">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < data.length}
        loader={
          <Typewriter
            words={[
              "Yükleniyor",
              "Yükleniyor.",
              "Yükleniyor..",
              "Yükleniyor...",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        }
      >
        <div className="w-[100%] md:w-[75%] mx-auto mt-[10%] mb-[10%] grid ">
          {blogs.map((item, index) => (
            <div style={style} className={`  w-full`} key={index}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                className="mx-auto w-full"
              >
                <img
                  className="max-w-[30%]   object-cover"
                  alt=""
                  src={item?.photoUrl}
                />

                <Stack className="w-full">
                  <CardBody>
                    <Heading
                      className="w-full flex justify-center items-center mx-auto"
                      size="md"
                    >
                      {item?.Title}
                    </Heading>

                    <Text className="w-full  flex justify-start ml-2 gap-2 items-center ">
                      {item?.tags.map((item) => (
                        <h1 className=" flex gap-2 items-center border border-black text-sm">
                          <AiFillTags />
                          {item}
                        </h1>
                      ))}
                    </Text>
                    <Text className="w-full flex justify-center items-center mx-auto">
                      {item?.Title}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Daha Fazlasını Oku.
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
          {items.map((item, index) => (
            <div style={style} className={`p-2`} key={index}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <img
                  alt=""
                  className="object-cover w-[30%] py-2"
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{item} +fds</Heading>

                    <Text py="2">
                      Caffè latte is a coffee beverage of Italian origin made
                      with espresso and steamed milk.
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Buy Latte
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Article;
