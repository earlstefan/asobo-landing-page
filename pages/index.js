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
  Center,
  useMediaQuery,
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
import styles from "../styles/Home.module.css";

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

  return (
    <Flex flexDirection="column">
      <Flex bg="red.500" w="100%" p={4}>
        <Flex>
          <Heading as="h3" size="lg" mt={1} ml={1} color="white">
            Asobo
          </Heading>
        </Flex>
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Options"
            color="white"
            colorScheme="red"
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              About
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              Services
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Projects
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Blog
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Book a call
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        m={4}
        alignItems="center"
        justify="center"
        maxW="100%"
        m={{ base: "6", md: "6", lg: "6" }}
        mt={{ base: "12", md: "12", lg: "12" }}
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
              I design products
            </Heading>
            <Heading
              fontSize={{ base: "32px", md: "40px", lg: "52px" }}
              lineHeight={{ base: "1.3", md: "1.4", lg: "1.4" }}
            >
              that delight and inspire people.
            </Heading>
          </Box>
          <Text fontSize="xl" mt={5}>
            Hi! I'm Joe, a product designer, I create user-friendly interfaces
            for fast-growing startups.
          </Text>
          <Button size="lg" colorScheme="red" mt="24px" bg="red.500">
            Book a Call
          </Button>
        </Box>
        {isLargerThan450 ? <BrandLogo /> : ""}
      </Flex>

      <Flex flexDirection="column" alignItems="center" mt={6}>
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

      <Flex flexDirection="column" alignItems="center" mt={6}>
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
    </Flex>
  );
};

export default Home;
