import { Github, Linkedin, FileText, Instagram, Twitter } from 'lucide-react';
const links = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/AdhiseemPandey',
    position: 'top-0 left-[20%]'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/adhiseem-pandey-90a2362a5/',
    position: 'top-[10%] right-[15%]'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/adhiseem_pandey/',
    position: 'bottom-[20%] left-[10%]'
  },
  {
    name: 'X',
    icon: Twitter,
    url: 'https://x.com/adhiseem_pandey',
    position: 'bottom-[10%] right-[20%]'
  }
];

const LinksHub = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="text-center z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white font-bold text-4xl mb-6 mx-auto shadow-2xl">
              AP
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Adhiseem Pandey</h3>
          </div>

          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute ${link.position} hub-link-card`}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold">{link.name}</span>
              </a>
            );
          })}

          <a
            href="#resume"
            className="absolute top-[50%] left-[5%] hub-link-card"
            style={{
              animationDelay: '0.6s'
            }}
          >
            <FileText className="w-6 h-6 mb-2" />
            <span className="text-sm font-semibold">Resume/CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinksHub;
