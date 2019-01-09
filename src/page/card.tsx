import * as React from "react"
import { Suspense } from "react"
import ErrorBoundary from "react-error-boundary"
import Card from "../components/card"
import { Loading, Error } from "../components/common/states"

const WrappedLockedCard = (props: any) => (
  <Suspense fallback={<Loading />}>
    <ErrorBoundary
      FallbackComponent={(props: any) => <Error error={props.error} />}
      onError={() => console.log("inside page/card.tsx")}
    >
      <Card {...props} />
    </ErrorBoundary>
  </Suspense>
)

export default WrappedLockedCard
