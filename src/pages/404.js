import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found !! Error Occured" />
    <h1>404: Not Found !! Error</h1>
    <p>You just hit a wrong route that doesnt exist... so sorry.</p>
  </Layout>
)

export default NotFoundPage
