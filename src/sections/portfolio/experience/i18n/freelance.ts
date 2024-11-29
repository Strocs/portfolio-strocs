import { getCollection } from 'astro:content'
import type { Experience } from '../types/experience'

export const { title, description, from, to }: Experience = {
  title: 'Desarrollador Freelance',
  description:
    'Desarrollo sitios web con alto rendimiento, utilizando Astro como framework principal, me gusta comprender a profundidad las características del producto de los clientes para crear un sitio web que encaje a la perfección con sus necesidades.',
  from: '2022',
  to: 'Actualidad',
}

export const projects = await getCollection('projects')

