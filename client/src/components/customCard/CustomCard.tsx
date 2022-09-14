import { ReactElement } from 'react'

type Props = {
  doesHavePadding:boolean
  children?: ReactElement;
};
export default function CustomCard({ children,doesHavePadding }: Props) {
  return (
    <div className={doesHavePadding ? 'p-5 mt-5 encartes-container' :'mt-5 encartes-container'} >
      {children}
    </div>
  )
}
