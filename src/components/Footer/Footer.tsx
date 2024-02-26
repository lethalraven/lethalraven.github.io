import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({children}) => {
    return (
      <div className="Footer">
        {children}
      </div>
    );
  };
  
  export default Footer;