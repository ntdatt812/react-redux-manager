import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { increment } from './redux/counter/counter.slide'

function App() {

  const count = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch();

  console.log(">>check count: ", count)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>
          My current count = {count.value}
        </h1>
        <div>
          <button
            onClick={() => dispatch(
              increment()
            )}
          >Increase + 1</button>
        </div>
      </div>
    </>
  )
}

export default App
