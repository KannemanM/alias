export interface Wallet {
  id: string
  name: string
  alias: string
  color: string
  textColor: string
  accent: string
}

export const wallets: Wallet[] = [
  {
    id: "naranjax",
    name: "Naranja X",
    alias: "kannemanm.nx",
    color: "#EE4F35",
    textColor: "#FFFFFF",
    accent: "#cc3a22",
  },
  {
    id: "mercadopago",
    name: "Mercado Pago",
    alias: "kannemanm.mp",
    color: "#FFE600",
    textColor: "#1A1A1A",
    accent: "#D4C000",
  },
  {
    id: "brubank",
    name: "Brubank",
    alias: "kannemanm.bru",
    color: "#614AD9",
    textColor: "#FFFFFF",
    accent: "#4F3CB5",
  },
  {
    id: "lemoncash",
    name: "Lemon Cash",
    alias: "kannemanm.lemon",
    color: "#CFFF2E",
    textColor: "#1A1A1A",
    accent: "#B3E000",
  },
  {
    id: "belo",
    name: "Belo",
    alias: "kannemanm.belo",
    color: "#5F42E4",
    textColor: "#FFFFFF",
    accent: "#4B33C0",
  },
  {
    id: "astropay",
    name: "AstroPay",
    alias: "kannemanm.astro",
    color: "#1a2d2a",
    textColor: "#FFFFFF",
    accent: "#2d4a42",
  },
]

export const userName = "Martin Kanneman"
