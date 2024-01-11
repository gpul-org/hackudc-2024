import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: '¿Qué es?',
      href: getPermalink('#que-es'),
    },
    {
      text: 'FAQ',
      href: getPermalink('#faq'),
    },
    {
      text: 'Patrocinadores',
      href: getPermalink('/patrocinadores'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Registro', href: getPermalink('/registro') }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/gpul_' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/gpul_/' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/gpul/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://gpul.org/assets/images/logos/logo_gpul.png)]"></span>
    Página web creada por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://gpul.org/"> GPUL</a>.
  `,
};
