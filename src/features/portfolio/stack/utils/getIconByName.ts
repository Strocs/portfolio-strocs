interface AstroSVGComponent {
  default: {
    src: string
    width: number
    height: number
    format: string
  }
}

const logos = import.meta.glob<AstroSVGComponent>('../assets/*.svg', {
  eager: true,
})

const namedLogos = Object.values(logos).map((logo) => {
  const name = logo.default.src.match(/(?!=\/)([a-zA-Z0-9]*)(?=\.svg)/g)![0]
  return {
    ...logo,
    name,
  }
})

const getIconByName = (name: string) => {
  const normalizedName = name.toLowerCase().replace(/[ .]/g, '')
  return namedLogos.find((logo) => logo.name === normalizedName)?.default
}

export { getIconByName, namedLogos, logos }
