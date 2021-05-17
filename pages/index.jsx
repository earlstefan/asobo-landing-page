import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Badge,
  Image,
  Flex,
  Spacer,
  Heading,
  Button,
  Text,
  Wrap,
  WrapItem,
  useMediaQuery,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  EditIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import BrandLogo from "./loremlogo/brandLogo";
import LoremOne from "./loremlogo/loremOne";
import LoremTwo from "./loremlogo/loremTwo";
import LoremThree from "./loremlogo/loremThree";
import LoremFour from "./loremlogo/loremFour";
import LoremFive from "./loremlogo/loremFive";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import Head from "next/head";

const Home = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)");
  const [open, setOpen] = useState(false);

  return (
    <Flex flexDirection="column">
      <Head>
        <title>Asobo | Let's PLAY!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLargerThan930 ? (
        <NavBar open={open} setOpen={setOpen}></NavBar>
      ) : (
        <NavBar open={open} setOpen={setOpen}></NavBar>
      )}

      <Flex
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        alignItems="center"
        justify="center"
        maxW="100%"
        m={{ base: "6", md: "6", lg: "6" }}
        mt={{ base: "24", md: "32", lg: "32" }}
        mb={{ base: "12", md: "12", lg: "12" }}
      >
        <Box
          pr={{ base: "0", md: "0", lg: "12" }}
          mb={{ base: "12", md: "0", lg: "0" }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          w={{ base: "100%", md: "70%", lg: "45%" }}
        >
          <Box>
            <Heading
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              lineHeight={{ base: "1.3", md: "1.4", lg: "1.4" }}
              fontSize={{ base: "32px", md: "40px", lg: "52px" }}
            >
              Let's PLAY,
            </Heading>
            <Heading
              fontSize={{ base: "32px", md: "40px", lg: "52px" }}
              lineHeight={{ base: "1.3", md: "1.4", lg: "1.4" }}
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              DELIGHT and INSPIRE people!
            </Heading>
          </Box>
          <Text fontSize="xl" mt={5}>
            Hi! I'm Asobo, a playful website designer, I create user-friendly
            interfaces for fast-growing startups.
          </Text>
          <Button size="lg" colorScheme="red" mt="24px" bg="red.500">
            Book a Call
          </Button>
        </Box>
        {isLargerThan450 ? <BrandLogo /> : ""}
      </Flex>

      <Flex flexDirection="column" alignItems="center" mt={12}>
        <Text fontSize={{ base: "24px" }}>
          {isLargerThan930 ? "Trusted by" : "Lorem by"}
        </Text>
        <Box>
          <Wrap justify="center" className={styles.marginZero}>
            <WrapItem className={styles.marginZero}>
              <LoremOne />
            </WrapItem>
            <WrapItem className={styles.marginZero}>
              <LoremTwo />
            </WrapItem>
            <WrapItem className={styles.marginZero}>
              <LoremThree />
            </WrapItem>
            <WrapItem className={styles.marginZero}>
              <LoremFour />
            </WrapItem>
            <WrapItem className={styles.marginZero}>
              <LoremFive />
            </WrapItem>
          </Wrap>
        </Box>
      </Flex>

      <Flex flexDirection="column" alignItems="center" mt={12}>
        <Text
          mb={6}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontWeight="extrabold"
          fontSize={{ base: "24px", md: "32px", lg: "40px" }}
        >
          {isLargerThan930 ? "Services" : "Lorem Services"}
        </Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text
            textAlign={{ base: "center", md: "center", lg: "center" }}
            w={{ base: "70%", md: "60%", lg: "60%" }}
            mt={1}
            fontWeight="extrabold"
            lineHeight={{ base: "1.3", md: "1.4", lg: "1.4" }}
            fontSize={{ base: "32px", md: "40px", lg: "52px" }}
          >
            {isLargerThan930
              ? "Design that solves problems, one product at a time."
              : "Lorem Services that solves problems, one product at a time."}
          </Text>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        mt={6}
        mb={6}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Box
          maxW={{ base: "xs", md: "md", lg: "lg" }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mx={3}
          my={3}
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          maxW={{ base: "xs", md: "md", lg: "lg" }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mx={3}
          my={3}
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          maxW={{ base: "xs", md: "md", lg: "lg" }}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mx={3}
          my={3}
        >
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        background="#3f3d56"
        color="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100px"
      >
        <Flex
          w="16rem"
          display="flex"
          justifyContent="space-evenly"
          className={styles.aLinks}
        >
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://www.twitter.com/">Twitter</a>
          <a href="https://www.facebook.com/">Facebook</a>
        </Flex>
        <Flex>
          <span>2021 Earl Pascual @ earlstefan.github.io</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

const NavBar = (props) => {
  console.log(props);

  const openStyle = () => {
    return styles.navLinks + " " + styles.open;
  };

  const openToggle = () => {
    props.setOpen(!props.open);
  };
  return (
    <>
      <Flex zIndex="docked" position="fixed" w="100%" pt={4} background="white">
        <Heading
          as="h3"
          size="lg"
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={7}
          color="#3f3d56"
        >
          Asobo
        </Heading>
        <Spacer />
        <div
          className={styles.hamburger}
          onClick={() => {
            openToggle();
          }}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul className={props.open ? openStyle() : styles.navLinks}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Book a Call</a>
          </li>
        </ul>
      </Flex>
    </>
  );
};

export default Home;
