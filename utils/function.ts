import { message } from "antd"

interface CheckConnectedWalletAddressI {
  walletWhitelists: string[]
  disconnect: () => void
  connectedAccount: string
}

export function CheckConnectedWalletAddress(params: CheckConnectedWalletAddressI) {
  const { walletWhitelists, disconnect, connectedAccount } = params

  if (walletWhitelists.length === 0) return

  if (walletWhitelists.indexOf(connectedAccount) < 0) {
    message.error("Mismatched Wallet")
    disconnect()
    return
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.substring(0, maxLength) + "..."
  }
}
