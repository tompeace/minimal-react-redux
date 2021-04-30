import { Fragment } from "react"
import PageTitle from "@/components/page-title"
import { useDispatch, useSelector } from "react-redux"
import { increase, decrease } from '@/store/count'

const Button = ({ children, ...props }) => (
  <button
    className='block border border-black rounded p-1 my-4' {...props}>
    {children}
  </button>
)

export default function Home(props) {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const handleIncrease = () => dispatch(increase())
  const handleDecrease = () => dispatch(decrease())

  return (
    <Fragment>
      <PageTitle>
        Welcome
      </PageTitle>
      <Button onClick={handleIncrease}>
        INCREASE 🙂
      </Button>
      <Button onClick={handleDecrease}>
        DECREASE 🙁
      </Button>
      <div  data-testid="count" className='text-4xl'>
        {count}
      </div>
    </Fragment>
  )
}