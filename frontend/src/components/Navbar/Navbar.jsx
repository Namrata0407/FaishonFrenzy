import { ReactNode } from "react";
import {
<<<<<<< HEAD
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Input,
    ButtonGroup,
    Divider,
    Text,
    Collapse
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
=======
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  ButtonGroup,
  Divider,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
>>>>>>> f8df74511b94d2719d97abe73ce61a816d78eb2b
// import {Link as }
import { Link as RouterLink } from "react-router-dom";
// import source from "../../Images/HomePage/img1.png";
import Source2 from "../../Images/HomePage/img2.png";
import {
<<<<<<< HEAD
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import BelowNavbar from './BelowNavbar';
import { useContext } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';

import { Navigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import Collapseble from './Collapseble';


const LoginSignUp = ["Login", "SignUpPage"];
const FilterPrice = ["Shop All Dresses","New!","Top-Rated Dresses","Bridesmaid Dresses","Top-Rated","Bags & Small Accessories","Belts","Fashion Gloves"]
const FilterSizeType = ["Shop All Top-Rated","Top-Rated Dresses","Top-Rated Clothing","Top-Rated Shoes","Top-Rated Accessories","Top-Rated Wedding","Top-Rated Home & Furniture","Top-Rated Beauty",,"Mini & Tunic Dresses","Cocktail & Party Dresses","Petite Dresses","Plus Dresses","Wedding Dresses","Wedding Guest Dresses","Bold & Bright Dresses","Shirt Dresses","Trending: Tulle & Sheer","Little Black Dresses","Little White Dresses"];
const FilterBySizeNo = ["Shop All Dresses","New!","Top-Rated Dresses","Bridesmaid Dresses","Formal Dresses","Jumpsuits","Lounge & Casual Dresses","Maxi Dresses","Midi Dresses","Mini & Tunic Dresses","Cocktail & Party Dresses","Petite Dresses","Plus Dresses","Wedding Dresses","Wedding Guest Dresses","Bold & Bright Dresses","Shirt Dresses","Trending: Tulle & Sheer","Little Black Dresses","Little White Dresses"];
const FilterByBrand = ["Shop All Shoes","New!","Top-Rated","Boots & Booties","Cold Weather Boots","Flats","Heels & Wedges","Mules & Clogs","Sandals","Slippers","Sneakers","Socks & Tights","It's Here! The Reformation Shop","Rainbow Brights : Shoes &","Accessories","Thong Sandals","Embellished Shoes","Party Shoes","Platform Shoes",""]
const FilteByColor = ["Shop All Accessories","New!","Top-Rated","Bags & Small Accessories","Belts","Fashion Gloves","Hair Accessories","Hats","Jewelry","Scarves","Socks & Tights","Sunglasses & Reading Glasses","Travel & Tech","Necklaces","Earrings","Bracelets","Rings","Hoop Shop","Fine & Demi-Fine Jewelry","Shop All Jewelry"];

const Links = ['𝐵𝑒𝒻𝒶𝓈𝒽𝒾𝑜𝓃𝒶𝒷𝓁𝑒'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        fontSize={"20"}
        href={'#'}>
        {children}
    </Link>
);

const getData = async (val) => {
    if (val) {
        const res = await fetch(`https://test-api-2.onrender.com/products?q=${val}`);
        const data = await res.json();
        return data;
    }

}
=======
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import BelowNavbar from "./BelowNavbar";
import { useContext } from "react";

import { useEffect } from "react";
import { useState } from "react";
// import { CartContext } from '../Contexts/CartContext';
import { Navigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import {FiSearch} from "react-icons/fi";
import {SlHandbag} from "react-icons/sl" 
import OnhoverProp from './Onhover';


const Links = ["𝐵𝑒𝒻𝒶𝓈𝒽𝒾𝑜𝓃𝒶𝒷𝓁𝑒"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontSize={"20"}
    href={"#"}
  >
    {children}
  </Link>
);

const getData = async (val) => {
  if (val) {
    const res = await fetch(
      `https://test-api-2.onrender.com/products?q=${val}`
    );
    const data = await res.json();
    return data;
  }
};
>>>>>>> f8df74511b94d2719d97abe73ce61a816d78eb2b

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

<<<<<<< HEAD
    const [inputData, setInputData] = useState("");


    const fetchedData = async (inputData) => {
        const result = await getData(inputData);

    }




    return (
        <>
            <Image src={Source2}  alt={"Error"}/>

            <Box>

                <Box>
                    <HStack display={['block', 'block', 'block', 'none', 'none']}>
                        <Flex justifyContent={"space-evenly"}>
                            <Box width={"50%"} borderRight={"0.1px solid #b1b5be"}>
                                <RouterLink to="/">
                                    <div style={{ borderTop: "3.5px solid #167a92", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                        <p style={{ fontSize: "120%" }}> 𝙵𝚊𝚒𝚜𝚑𝚘𝚗𝙵𝚛𝚎𝚗𝚣𝚢</p>
                                    </div>
                                    {/* <Image borderRight={"0.1px solid #b1b5be"} borderLeft={"0.1px solid #b1b5be"} w={"200px"} height={"65px"} src={source} alt={"error"} /> */}

                                </RouterLink>
                            </Box>
                            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ fontSize: "120%" }}>𝐵𝑒𝒻𝒶𝓈𝒽𝒾𝑜𝓃𝒶𝒷𝓁𝑒</p>
                            </div>

                        </Flex>

                    </HStack>
                </Box>
                <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} borderBottom={"0.1px solid #b1b5be"} borderTop={"0.1px solid #b1b5be"}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            pb={4} display={['block', 'block', 'block', 'none', 'none']}
                            onClick={isOpen ? onClose : onOpen}
                        />

                        <HStack spacing={8} alignItems={'center'}>
                            <Box pb={4} display={['none', 'none', 'none', 'block', 'block']}>
                                <RouterLink to="/">
                                    {/* <Image borderRight={"0.1px solid #b1b5be"} borderLeft={"0.1px solid #b1b5be"} w={"200px"} height={"65px"} src={source} alt={"error"} /> */}
                                    <p style={{ borderRight: "0.1px solid #b1b5be", marginTop: "8%", padding: "16px", fontWeight: "bold", fontSize: "122%", borderTop: "3.5px solid #167a92", borderLeft: "0.1px solid #b1b5be" }}> 𝙵𝚊𝚒𝚜𝚑𝚘𝚗𝙵𝚛𝚎𝚗𝚣𝚢</p>
                                </RouterLink>
                            </Box>
                            <HStack
                                borderRight={"0.1px solid #b1b5be"}
                                marginTop={"8%"}
                                paddingTop={"17px"}
                                w={"200px"} height={"65px"}
                                as={'nav'}
                                spacing={4}
                                pb={4} display={['none', 'none', 'none', 'flex', 'block']}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </HStack>
                        </HStack>

                        <Flex w={"50%"}>
                            <input onChange={(e) => setInputData(e.target.value)} placeholder='Search FaishonFrenzy' style={{ width: "100%", border: "1px solid grey" }} _focus={"none"} borderRadius={"none"} />
                            <Button _hover={"#167a92"} border={"2px solid #167a92"} borderRadius={"none"} backgroundColor={"#167a92"} color={"white"}><FiSearch /></Button>
                        </Flex>

                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <RouterLink to={"/cart"}>
                            {/* <Image _hover={"#167a92"} color={"#167a92"} h={"350px"} w={"35px"} size={'sm'} src={"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbD0iTXkgU2hvcHBpbmcgQ2FydCIgcm9sZT0iaW1nIiBmb2N1c2FibGU9ImZhbHNlIj48cGF0aCBkPSJNMTQuNzggNi40OVY1LjE4NUMxNC43OCAyLjYwMSAxMi42MzcuNSAxMCAuNVM1LjIyIDIuNjAxIDUuMjIgNS4xODR2MS4zMDdIMHY3Ljk3M0MwIDE3LjI0IDIuMzU3IDE5LjUgNS4yNTQgMTkuNWg5LjQ5M2MyLjg5NyAwIDUuMjUzLTIuMjYgNS4yNTMtNS4wMzZWNi40OXpNNi4yMiA1LjE4NUM2LjIyIDMuMTUzIDcuOTE0IDEuNSAxMCAxLjVzMy43OCAxLjY1MyAzLjc4IDMuNjg0djEuMzA3SDYuMjJ6TTE5IDE0LjQ2NGMwIDIuMjI1LTEuOTA4IDQuMDM2LTQuMjUzIDQuMDM2SDUuMjU0QzIuOTA4IDE4LjUgMSAxNi42OSAxIDE0LjQ2NFY3LjQ5aDQuMjJ2Mi40MjdoMVY3LjQ5MWg3LjU2djIuNDI3aDFWNy40OTFIMTl6Ii8+PC9zdmc+"}  alt={"error"}/> */}
                            <Box pb={4} display={['block', 'block', 'block', 'block', 'block']}><SlHandbag style={{ height: "350px", width: "35px", color: "#167a92", marginTop: "10px" }} /></Box>
                        </RouterLink>

                        <Flex alignItems={'center'}>
                            <Menu  >
                                {/* <Box> */}
                                {/* </Box> */}

                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    paddingLeft={"25px"}
                                    marginTop={"10px"}
                                    paddingRight={"25px"}
                                    pb={4} display={['none', 'none', 'none', 'block', 'block']}
                                >


                                    <FaUserAlt marginLeft={"20px"} size={"25px"} />
                                </MenuButton >
                                <MenuList >
                                    {/* <MenuItem> */}
                                    <MenuItem>
                                        <RouterLink to="/login">

                                            Login

                                        </RouterLink>
                                    </MenuItem>
                                    <MenuItem >
                                        LogOut
                                    </MenuItem>
                                    {/* <MenuItem>SignUP</MenuItem> */}
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>

                </Box>
                <Collapse in={isOpen} animateOpacity width={"100%"} display={['none', 'none', 'none', 'block', 'block']} >
                    <Box
                        // p='40px'
                        color='bl'
                        mt='4'
                        bg='white'
                        rounded='md'
                        shadow='md'
                        width={"100%"}
                        display={['block', 'block', 'block', 'none', 'none']}
                    >
                        <Box w={"100%"} height={"auto"}>

                            <Collapseble Filter={LoginSignUp} filterBy={"Login/SignUp"} />
                            <Divider borderColor={"gray"} />

                            <Collapseble Filter={FilterPrice} filterBy={"New!"} />
                            <Collapseble Filter={FilterSizeType} filterBy={"Top-Rated"} />
                            <Collapseble Filter={FilterBySizeNo} filterBy={"Dresses"} />
                            <Collapseble Filter={FilterByBrand} filterBy={"Shoes"} />
                            <Collapseble Filter={FilteByColor} filterBy={"Accessories"} />
                        </Box>
                    </Box>
                </Collapse>
            </Box>
                
      <Box display={['none', 'none', 'none', 'block', 'block']} >
   
        
        <BelowNavbar/>
        
    </Box>
    <Divider border={"1px solid #b1b5be"} w={"100%"}/>
        </>
    );
}
=======
  const [inputData, setInputData] = useState("");

  const fetchedData = async (inputData) => {
    const result = await getData(inputData);
  };

  return (
    <>

    <Image src={Source2} alt={"Error"} />
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        borderBottom={"0.1px solid #b1b5be"}
        borderTop={"0.1px solid #b1b5be"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box pb={4} display={["none", "none", "none", "block", "block"]}>
              <RouterLink to="/">
                <p
                  style={{
                    borderRight: "0.1px solid #b1b5be",
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "122%",
                    borderTop: "3.5px solid #167a92",
                    borderLeft: "0.1px solid #b1b5be",
                  }}
                >
                  {" "}
                  𝙵𝚊𝚒𝚜𝚑𝚘𝚗𝙵𝚛𝚎𝚗𝚣𝚢
                </p>
              </RouterLink>
            </Box>
            <HStack
              borderRight={"0.1px solid #b1b5be"}
              w={"200px"}
              height={"65px"}
              as={"nav"}
              spacing={4}
              pb={4}
              display={["none", "none", "none", "flex", "block"]}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex w={"50%"}>
            <input
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Search FaishonFrenzy"
              style={{ width: "100%", border: "1px solid grey" }}
              _focus={"none"}
              borderRadius={"none"}
            />
            <Button
              _hover={"#167a92"}
              border={"2px solid #167a92"}
              borderRadius={"none"}
              backgroundColor={"#167a92"}
              color={"white"}
            >
              <FiSearch />
            </Button>
          </Flex>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <RouterLink to={"/cart"}>
            <Box pb={4} display={["none", "none", "none", "block", "block"]}>
              <SlHandbag
                style={{ height: "350px", width: "35px", color: "#167a92" }}
              />
            </Box>
          </RouterLink>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                pb={4}
                display={["none", "none", "none", "block", "block"]}
              >
                <FaUserAlt marginLeft={"20px"} size={"25px"} />
              </MenuButton>
              <MenuList>
                {/* <MenuItem> */}
                <MenuItem>
                  <RouterLink to="/login">Login</RouterLink>
                </MenuItem>
                <MenuItem>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={["none", "none", "none", "block", "block"]}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
>>>>>>> f8df74511b94d2719d97abe73ce61a816d78eb2b
