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
    color: "#009EE3",
    textColor: "#FFFFFF",
    accent: "#007BC3",
  },
  {
    id: "brubank",
    name: "Brubank",
    alias: "kannemanm.bru",
    color: "#635BFF",
    textColor: "#FFFFFF",
    accent: "#4F46E5",
  },
  {
    id: "astropay",
    name: "AstroPay",
    alias: "kannemanm.astro",
    color: "#1a2d2a",
    textColor: "#FFFFFF",
    accent: "#2d4a42",
  },
  {
    id: "lemoncash",
    name: "Lemon Cash",
    alias: "kannemanm.lemon",
    color: "#1A1A1A",
    textColor: "#FFFFFF",
    accent: "#8FFF00",
  },
  {
    id: "belo",
    name: "Belo",
    alias: "kannemanm.belo",
    color: "#FFFFFF",
    textColor: "#1E1B4B",
    accent: "#4338CA",
  },
]

export const userName = "Martin Kanneman"
