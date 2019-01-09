import * as React from "react"
import CopyText from "../../../../common/copy-text"

interface IProps {
  address: string
  privateKey: string
  mnemonic: string
}

const EthereumWallet: React.SFC<IProps> = ({ address, privateKey, mnemonic }) => (
  <>
    <CopyText heading="Your funds are held at this Ethereum address:" text={address} />
    <CopyText heading="The private key is:" text={privateKey} />
    <CopyText heading="The mnemonic is:" text={mnemonic} />{" "}
  </>
)

export default EthereumWallet
