import classNames from 'classnames'
import * as React from 'react'
import styles from './Card.module.scss'
import CardSection from './CardSection'
import CardTitle from './CardTitle'

interface ICardComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  cardSection?: React.ReactNode | string
  cardTitle?: React.ReactNode | string
}

const Card: React.FunctionComponent<ICardComponentProps> = ({
  children,
  className,
  cardSection,
  cardTitle,
  ...props
}) => (
  <div className={classNames([styles.Card, className])} {...props}>
    {cardTitle && <CardTitle content={cardTitle} />}
    {cardSection && <CardSection content={cardSection} />}
    {children}
  </div>
)

export default Card
