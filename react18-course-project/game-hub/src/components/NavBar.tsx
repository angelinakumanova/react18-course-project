import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();

  return (
    <HStack padding="10px">
        <Image src={logo} _hover={{cursor: 'pointer'}} boxSize='60px' onClick={() => navigate('/')} />
        <SearchInput />
        <ColorModeSwitch  />
    </HStack>
  )
}

export default NavBar
