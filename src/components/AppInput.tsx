import { Input } from "@chakra-ui/react"

interface IAppInput {
  type: string,
  placeholder: string,
  margin: string,
}

const AppInput = (props: IAppInput) => {
  const { type, placeholder, margin } = props;

  return (
    <>
      <Input 
        type={ type } 
        placeholder={ placeholder }
        size="sm" 
        marginBottom={ margin }
        borderRadius='5px'
        border='1px' 
        borderColor='#777'
        />
    </>
  )
}

export default AppInput