import './App.css'
import PerformanceProblem from './components/PerformanceProblem'
import PerformanceProblemUseCallBack from './components/PerformanceProblemUseCallBack'
// import useFetch from './hooks/useFetch'

function App() {
  // const fetched = useFetch("https://jsonplaceholder.typicode.com/albums")
  return (
    <div className="App">
      {/* <h1>Posts who fetched</h1> */}
      {/* {fetched.isLoading ? <div className='spinner'></div>: ""}
      <ul>
        {fetched.error == null ? fetched.data.map((it,i)=><li key={i}>Id: {it.id} ,Title: {it.title}</li>): <h1 className='error'>Error Loading Page</h1>}
      </ul> */}
      <PerformanceProblem/>
      {/* <PerformanceProblemUseCallBack />  */}
    </div>
  )
}

export default App
