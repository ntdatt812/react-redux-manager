import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { decreasing, increment } from './redux/counter/counter.slide'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { Button } from 'react-bootstrap'

function App() {

  // const count = useSelector((state: RootState) => state.counter)
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();

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
          <Button>Test bootstrap</Button>
        </h1>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <div >
            <button
              onClick={() => dispatch(
                increment()
              )}
            >Increase + 10</button>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(
                  decreasing()
                )
              }}
            >Decreasing - 1</button>
          </div>
        </div>

      </div >
    </>
  )
}

export default App
