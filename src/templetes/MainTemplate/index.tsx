
import { Container } from '../../components/Conteiner';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

import '../../styles/theme.css';
import '../../styles/global.css';

type MainTempleteProps = {
  children: React.ReactNode;
};

export function MainTemplate({children}: MainTempleteProps) {
  return (<>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

       <Container>
        <Footer />
      </Container>
    </>
  );
}
