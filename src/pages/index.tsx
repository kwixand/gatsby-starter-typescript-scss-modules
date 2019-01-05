import * as React from 'react'
import Card from '../components/card/Card'
import CardSection from '../components/card/CardSection'
import Layout from '../components/layout/Layout'

const styles = {
  padding: '4vw',
}

export default () => (
  <Layout>
    <main style={styles}>
      <Card>
        <CardSection>Awesome</CardSection>
      </Card>
    </main>
  </Layout>
)
