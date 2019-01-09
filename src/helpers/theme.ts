import { createMuiTheme } from "@material-ui/core"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

export default createMuiTheme({
  palette: {
    primary: {
      main: "#f83839"
    },
    secondary: {
      main: "#513b41"
    }
  },
  typography: {
    useNextVariants: true
  }
})
