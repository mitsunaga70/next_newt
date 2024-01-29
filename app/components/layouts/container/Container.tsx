import styles from './Container.module.scss';

type Props = {
  children: React.ReactNode,
  size?: 'large' | 'middle' | 'small' // sizeに許可する値を明示的に指定
}

function Container({ children, size = 'middle' }: Props) {
  const containerClassNames = `${styles[size]}` // スタイル名を動的に設定

  return (
    <div className={containerClassNames}>
      {children}
    </div>
  )
}
export default Container;