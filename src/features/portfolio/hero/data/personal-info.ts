import type { PersonalInfo } from "../types/personal-info";
import personalImage from "@/assets/images/personal.jpg";

export const openToWork = true
const openToWorkLabel = new Map([[true, 'Disponible para trabajar']])

export const { title, subTitle, OTWLabel, description }: PersonalInfo = {
  title: 'Hola! <br> Soy <strong>Ignacio Molina</strong>',
  subTitle: 'Desarrollador Full Stack enfocado en el Frontend',
  OTWLabel: openToWorkLabel.get(openToWork),
  description:
    '+2 años de experiencia creando sitios web personalizados como freelance. Mi formación como Arquitecto me entregó la capacidad de analizar proyectos desde una perspectiva estructural, asegurando gran atención al detalle y conciencia del proceso.',
}

export const { src, alt } = {
  src: personalImage,
  alt: 'Ignacio Molina mirando alegremente de frente en la naturaleza',
}