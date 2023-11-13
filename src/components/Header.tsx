import { Box, Flex, Heading } from "@chakra-ui/react"

const Header  = () => {
  return(
    <Flex 
      backgroundColor='#505050'
      height='70px'
      justifyContent='flex-start'
      alignItems='center' 
      padding='20px'
    >
        <Heading as='h1' color='rgb(228, 16, 93)'>Dio Bank</Heading>
    </Flex>
  )
}

export default Header