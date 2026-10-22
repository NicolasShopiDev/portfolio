import { b2bPortalsPath, routes, type Lang, type Topic } from '../i18n/routes';
import { t } from '../i18n/ui';

/** The low-commitment step beside a contact button: something to look at before writing. */
export const secondaryCta = (topic: Topic, lang: Lang) => {
  const s = t(lang);
  if (topic === 'b2b') return { href: b2bPortalsPath(lang), label: s.ctaB2bPortals };
  if (topic === 'plus') return { href: `${routes.home[lang]}#lab`, label: s.ctaCheckoutLab };
  return { href: routes.projects[lang], label: s.ctaProjects };
};
