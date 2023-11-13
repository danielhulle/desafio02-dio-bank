import AppButton from "./AppButton"
import AppInput from "./AppInput"
import Header from "./Header"

import { FormControl, Heading, Flex, Box } from "@chakra-ui/react"

const Card = () => {
  return(
    <>
      <Header />
      <Flex minHeight='100vh' align='center' justify='center' backgroundColor='rgb(21, 22, 27)' padding='25px' color='rgb(228, 16, 93)'>
        <Box backgroundColor='#505050' borderRadius='25px' padding='45px' height='20em'>
          <Heading as="h2" size="xl" marginBottom='30px' textAlign='center'>Faça o login</Heading>
          <FormControl>
            <AppInput type='email' placeholder='Digite seu email' margin="10px" />
            <AppInput type="password" placeholder="Digite sua senha" margin='20px' />
          </FormControl>
          <AppButton />
        </Box>
      </Flex>
    </>
  )
}

export default Card