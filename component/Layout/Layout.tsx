import { ILayoutProps } from "./Interface";
import { Container } from "./LayoutStyle";

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};
export default Layout;
