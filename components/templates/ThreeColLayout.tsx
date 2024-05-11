import Header from '@/components/templates/Header';
import Footer from '@/components/templates/Footer';
import Seo from '@/components/templates/Seo';
import { UiConf } from '@/constants/uiconf'

interface Props {
    children: React.ReactNode;
    currentMenu: string;
    pageTitle: string;
    pageDescription: string;
}

export const ThreeColLayout = ({
    children,
    currentMenu,
    pageTitle,
    pageDescription,
  }: Props) => {
    return (
        <>
            <Seo
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            />
            <Header
                currentPage={currentMenu}
            />
            { children }
            <Footer 
                currentPage={currentMenu}
            />
        </>
    );
}

export default ThreeColLayout