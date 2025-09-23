import { Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/yahya.houssini/"
    },
    {
      icon: Linkedin, 
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yahya-houssini/"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      link: "#"
    }
  ];

  const footerLinks = [];

  return (
    <footer className="bg-background border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold gradient-text-hero mb-2">
              Yahya Houssini
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-200 text-muted-foreground hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS. 
              <span className="mx-2">•</span>
              Designed and developed with ❤️ in Morocco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;