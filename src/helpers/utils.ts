import { utils } from "ethers"

export const formatFiat = (value: number): string =>
  value.toLocaleString("en-GB", { style: "currency", currency: "USD" })

export const trimCoinDecimals = (value: number): string =>
  value.toLocaleString("en-GB", {
    style: "decimal",
    maximumFractionDigits: 8
  })

export const toCanonicalUnit = (symbol: string, quantity: number): string => {
  try {
    switch (symbol) {
      case "ETH": {
        return utils.formatEther(quantity).toString()
      }
      case "BTC": {
        const value = quantity / 10 ** 8
        return value.toString()
      }
      default: {
        console.error(`Unknown symbol ${symbol} of ${quantity}`)
        return "0"
      }
    }
  } catch (error) {
    console.error(error)
    return "?"
  }
}

export const copyToClipboard = (str: string): void => {
  var el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}
