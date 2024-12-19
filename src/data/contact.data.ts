import type { Contact } from '@/types/contact'
import Mail from '@/components/icons/Mail.astro'
import PhoneIcon from '@/components/icons/PhoneIcon.astro'
import { getI18N } from '@/i18n'

export const getContact = async ({
  lang,
}: {
  lang: string | undefined
}): Promise<Contact> => {
  const { RESUME } = await getI18N({ lang })

  return [
    {
      type: 'default',
      label: 'LinkedIn',
      url: '/',
    },
    {
      type: 'default',
      label: 'Github',
      url: '/',
    },
    {
      type: 'default',
      label: RESUME,
      url: '/',
    },
    {
      type: 'square',
      label: 'Email',
      Icon: Mail,
      url: '/',
    },
    {
      type: 'square',
      label: 'Phone',
      Icon: PhoneIcon,
      url: '/',
    },
  ]
}
