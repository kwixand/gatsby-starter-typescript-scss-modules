import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import './Layout.scss'

const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

interface ILayoutComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<ILayoutComponentProps> = ({
  children,
  ...props
}) => (
  <StaticQuery
    query={LayoutQuery}
    // tslint:disable jsx-no-lambda
    render={data => (
      <React.Fragment>
        <Helmet
          title={`${data.site.siteMetadata.title}: ${
            data.site.siteMetadata.description
          }`}
        >
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <div id="content" {...props}>
          {children}
        </div>
      </React.Fragment>
    )}
    // tslint:enable jsx-no-lambda
  />
)

export default Layout
