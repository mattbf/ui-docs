import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colors',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
