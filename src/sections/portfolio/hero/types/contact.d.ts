import type { ButtonVariants } from "@/types/button";
import type { AstroComponent } from "@/types/component";

interface ContactInfo {
  type: ButtonVariants
  label: string
  url: string
  Icon?: AstroComponent
}

export type Contact = ContactInfo[]
