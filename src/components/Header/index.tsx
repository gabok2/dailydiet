import { Container, Imagem, Profile } from "./styles";
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
export function Header() {
  return (
    <Container>
      <Imagem source={logo} />
      <Profile source={profile} />
    </Container>
  )
}