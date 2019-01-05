import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Card from '../components/card/Card'
import CardSection from '../components/card/CardSection'
import Layout from '../components/layout/Layout'

const RootIndexQuery = graphql`
  query RootIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const styles = {
  padding: '4vw',
}

export default () => (
  <Layout>
    <StaticQuery
      query={RootIndexQuery}
      // tslint:disable-next-line:jsx-no-lambda
      render={data => (
        <main style={styles}>
          <Card
            cardTitle={data.site.siteMetadata.title}
            cardSection={data.site.siteMetadata.description}
          />
        </main>
      )}
    />
  </Layout>
)
