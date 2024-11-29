import type { ButtonVariants } from "@/types/button";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

interface ContactInfo {
  type: ButtonVariants
  label: string
  url: string
  Icon?: AstroComponentFactory
}

export type Contact = ContactInfo[]
