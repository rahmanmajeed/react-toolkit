import { ReactElement, ReactNode, ReactPortal } from 'react';

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = null | ReactNodeArray;
type ReactNodeProps =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: JSX.Element | JSX.Element[] | ReactNodeProps;
};
function Layout({ children }: Props) {
  return <main>{children}</main>;
}
export default Layout;
