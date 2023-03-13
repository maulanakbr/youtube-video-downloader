import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <footer className="footer-content">
      <div className="footer-credits">
        <span>Created by</span> Maulana Akbar Yudistika &copy;{currentYear}
      </div>
      <div className="footer-media">
        <a
          className="cursor-pointer"
          href="https://www.instagram.com/shibuya7days/"
          aria-label="Instagram"
          target="blank"
          rel="noreferrer"
        >
          <RiInstagramLine size={13} />
        </a>
        <a
          className="cursor-pointer"
          href="https://linkedin.com/in/maulanakbr"
          aria-label="LinkedIn"
          target="blank"
          rel="noreferrer"
        >
          <RiLinkedinBoxLine size={13} />
        </a>
        <a
          className="cursor-pointer"
          href="https://github.com/maulanakbr"
          aria-label="GitHub"
          target="blank"
          rel="noreferrer"
        >
          <RiGithubLine size={13} />
        </a>
        <a
          className="cursor-pointer"
          href="https://wa.me/6288741076707"
          aria-label="Instagram"
          target="blank"
          rel="noreferrer"
        >
          <RiWhatsappLine size={13} />
        </a>
        <a
          className="cursor-pointer"
          href="mailto:yudistika.akbar@gmail.com"
          aria-label="Instagram"
          target="blank"
          rel="noreferrer"
        >
          <RiMailLine size={13} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
