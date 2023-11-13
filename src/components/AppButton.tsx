import { Button } from "@chakra-ui/react"
import { login } from "../services/login"

const AppButton = () => {
  return(
    <Button 
      marginTop='20px' 
      width='100%' 
      backgroundColor='#505050' 
      border='1px' 
      borderColor={ 'rgb(228, 16, 93)' } 
      _hover={{ bg: 'rgb(228, 16, 93)', color: 'white'}}
      onClick={ () => login() }
      >
        Entrar
      </Button>
  )
}

export default AppButton