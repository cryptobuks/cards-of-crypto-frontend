import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Paper, IconButton, Tooltip, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EthereumWallet from "./claim-gift/ethereum-wallet"
import BitcoinWallet from "./claim-gift/bitcoin-wallet"
import Link from "../../../common/link"
import Help from "../../../common/help"
import { toCanonicalUnit } from "../../../../helpers/utils"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  warning: {
    color: theme.palette.error.dark
  }
}))

interface IProps {
  coinSymbol: keyof ICoinSymbols
  coinQuantity: string
  wallet: IWallet
}

const ClaimGift: React.SFC<IProps> = ({ coinSymbol, coinQuantity, wallet }) => {
  const classes = useStyles({})

  let Wallet: any = EthereumWallet
  let icon: IconProp = ["fab", "ethereum"]
  if (coinSymbol === "BTC") {
    Wallet = BitcoinWallet
    icon = ["fab", "bitcoin"]
  }

  let quantity = toCanonicalUnit(coinSymbol, Number(coinQuantity))

  return (
    <Paper className={classes.root}>
      <Typography gutterBottom align="center">
        <FontAwesomeIcon icon="exclamation-triangle" className={classes.warning} /> If you lose or disclose
        the secrets you may lose the balance{" "}
        <FontAwesomeIcon icon="exclamation-triangle" className={classes.warning} />
      </Typography>
      <Help>
        <ul>
          <li>
            Don't know how to claim your prize? Checkour our gides on{" "}
            <Link external to="https://medium.com/@broadhaven.tech" text="Medium" />
          </li>
          <li>You your wallet address can be shared freely without compromising security</li>
          <li>
            Questions? Checkout our <Link to="/faq" text="FAQ" />.
          </li>
        </ul>
      </Help>

      <Typography variant="subtitle2">You were gifted:</Typography>
      <Typography gutterBottom>
        <IconButton disableRipple>
          <FontAwesomeIcon icon={icon} size="xs" />
        </IconButton>
        {`${quantity} ${coinSymbol}!`}
      </Typography>
      <Wallet {...wallet} />
    </Paper>
  )
}

export default ClaimGift
