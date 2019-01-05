import classNames from 'classnames'
import * as React from 'react'
import styles from './Card.module.scss'

interface ICardComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Card: React.FunctionComponent<ICardComponentProps> = ({
  children,
  className,
  ...props
}) => (
  <section className={classNames([styles.Card, className])} {...props}>
    {children}
  </section>
)

export default Card
