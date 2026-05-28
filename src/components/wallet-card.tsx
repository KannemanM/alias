"use client"

import { useState, useCallback } from "react"
import { Clipboard, QrCode, Check, Wallet as WalletIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog } from "@/components/ui/dialog"
import type { Wallet } from "@/lib/data"

interface WalletCardProps {
  wallet: Wallet
}

export function WalletCard({ wallet }: WalletCardProps) {
  const [copied, setCopied] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(wallet.alias)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = wallet.alias
      ta.style.position = "fixed"
      ta.style.opacity = "0"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [wallet.alias])

  const isLight = wallet.textColor !== "#FFFFFF"

  const overlayBg = isLight ? "bg-black/15" : "bg-white/20"
  const overlayHover = isLight ? "hover:bg-black/25 active:bg-black/35" : "hover:bg-white/30 active:bg-white/40"
  const ringColor = isLight ? "focus:ring-black/30" : "focus:ring-white/50"
  const iconColor = isLight ? "text-black/60" : "text-white"

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl p-5 shadow-md transition-all duration-200",
          "active:scale-[0.98]"
        )}
        style={{
          backgroundColor: wallet.color,
          color: wallet.textColor,
        }}
      >
        <div
          className={cn(
            "absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"
          )}
          style={{ backgroundColor: wallet.accent }}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-1/2 -translate-x-1/2 opacity-10"
          )}
          style={{ backgroundColor: wallet.accent }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl",
                overlayBg
              )}
            >
              <WalletIcon className={cn("h-5 w-5", iconColor)} />
            </div>
            <span className="font-semibold text-base tracking-tight">
              {wallet.name}
            </span>
          </div>

          <div className="mb-5">
            <p className="text-xs font-medium opacity-70 uppercase tracking-wider mb-1">
              ALIAS
            </p>
            <p className="text-base font-mono font-semibold tracking-wide">
              {wallet.alias}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                overlayBg,
                overlayHover,
                ringColor,
                isLight ? "text-black/80 focus:ring-offset-black/10" : "text-white focus:ring-offset-0"
              )}
              aria-label={copied ? "Alias copiado" : "Copiar alias"}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" />
                  <span>Copiar Alias</span>
                </>
              )}
            </button>

            <button
              onClick={() => setQrOpen(true)}
              className={cn(
                "flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                overlayBg,
                overlayHover,
                ringColor,
                isLight ? "text-black/80 focus:ring-offset-black/10" : "text-white focus:ring-offset-0"
              )}
              aria-label="Ver código QR"
            >
              <QrCode className="h-4 w-4" />
              <span className="hidden sm:inline">Ver QR</span>
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={qrOpen}
        onClose={() => setQrOpen(false)}
        title={`QR - ${wallet.name}`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex items-center justify-center w-48 h-48 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300">
            <QrCode className="h-16 w-16 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 text-center">
            Código QR para <span className="font-semibold">{wallet.alias}</span>
          </p>
        </div>
      </Dialog>
    </>
  )
}
