// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/luis-felipe-soares-coelho-980a76244/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/Felipeness'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/felipe.ness/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://contate.me/engenheiro-software-felipe'} className='hover:text-accent transition-all duration-300'>
        <RiWhatsappLine />
      </Link>
  </div>
  );
};

export default Socials;
