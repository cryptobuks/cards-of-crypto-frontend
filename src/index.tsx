import "./helpers/styles-bootstrap"
import * as React from "react"
import apolloClient from "./helpers/apollo"
import App from "./app"
import theme from "./helpers/theme"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter } from "react-router-dom"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { render } from "react-dom"
import ErrorBoundary from "react-error-boundary"
import { Error } from "./components/common/states"

render(
  <ApolloProvider client={apolloClient}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={(props: any) => <Error error="App level error boundary" />}
          onError={() => null}
        >
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
)
