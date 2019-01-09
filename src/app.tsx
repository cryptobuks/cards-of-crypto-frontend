import * as React from "react"
import Disclamier from "./components/disclaimer"
import FAQ from "./page/faq"
import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./page/home"
import Card from "./page/card"
import Order from "./page/order"
import UnknownRoute from "./page/unknown-route"
import { Route, Switch } from "react-router-dom"

const App = () => (
  <div>
    <Disclamier />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={Home} />
      <Route path="/order/:id" component={Order} />
      <Route path="/card/:token" component={Card} />
      <Route path="/faq" component={FAQ} />
      <Route component={UnknownRoute} />
    </Switch>
    <Footer />
  </div>
)

export default App
