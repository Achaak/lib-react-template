export const Lang = [
  {
    iso: "fr",
    name: "Français"
  },
  {
    iso: "en",
    name: "English"
  }
] as const

export type LangISO = typeof Lang[number]["iso"];