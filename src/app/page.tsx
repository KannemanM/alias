"use client"

import { Share2, Heart, User } from "lucide-react"
import { WalletCard } from "@/components/wallet-card"
import { wallets, userName } from "@/lib/data"
import { cn } from "@/lib/utils"

function handleShare() {
  const url = typeof window !== "undefined" ? window.location.href : ""
  if (typeof navigator !== "undefined" && navigator.share) {
    navigator.share({ title: "Mis Datos de Pago", url }).catch(() => {})
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert("¡Link copiado al portapapeles!")
    })
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-zinc-100">
          <div className="flex flex-col items-center text-center px-5 pt-6 pb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-200 mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-xl font-bold text-zinc-900">{userName}</h1>
            <p className="text-sm text-zinc-500 mt-1">
              Seleccioná una billetera para copiar los datos
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 px-4 md:px-8 lg:px-16 pt-6 pb-4 space-y-6">
          {/* Wallet cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wallets.map((w) => (
              <WalletCard key={w.id} wallet={w} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 md:px-8 lg:px-16 pb-6 pt-2 space-y-4">
          <button
            onClick={handleShare}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl",
              "bg-zinc-900 text-white text-sm font-semibold",
              "hover:bg-zinc-800 active:bg-zinc-700",
              "focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2",
              "transition-all duration-200 active:scale-[0.98]"
            )}
            aria-label="Compartir página"
          >
            <Share2 className="h-4 w-4" />
            <span>Compartir Página</span>
          </button>

          <p className="text-xs text-zinc-400 text-center flex items-center justify-center gap-1">
            Desarrollado con <Heart className="h-3 w-3 fill-red-500 text-red-500" /> por Martin Kanneman
          </p>
        </footer>
      </div>
    </div>
  )
}
