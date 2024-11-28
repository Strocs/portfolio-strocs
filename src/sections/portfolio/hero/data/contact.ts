import type { Contact } from "../types/contact";
import Mail from "@/components/icons/Mail.astro";
import PhoneIcon from "@/components/icons/PhoneIcon.astro";

export const contact: Contact = [
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
    label: 'Curriculum',
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
