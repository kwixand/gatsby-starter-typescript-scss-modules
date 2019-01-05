import classNames from 'classnames'
import * as React from 'react'
import styles from './Card.module.scss'

interface ICardComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  content?: React.ReactNode | string
}

const Card: React.FunctionComponent<ICardComponentProps> = ({
  children,
  className,
  content,
  ...props
}) => (
  <header className={classNames([styles.Card_title, className])} {...props}>
    {children}
  </header>
)

export default Card
