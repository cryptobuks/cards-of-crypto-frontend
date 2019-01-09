import * as React from "react"
import CopyText from "../../../../common/copy-text"

interface IProps {
  address: string
  wif: string
}

const BitcoinWallet: React.SFC<IProps> = ({ address, wif }) => (
  <>
    <CopyText heading="Your funds are held at this Bitcoin address:" text={address} />
    <CopyText heading="Your wallets WIF (an access key of sorts) is:" text={wif} />
  </>
)

export default BitcoinWallet
