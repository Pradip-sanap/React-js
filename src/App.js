import './App.css';
import style from './App.module.css';

function App() {

  const name = <h1>pradip</h1>
  const age = <h1>24</h1>
  const email = <h1>pradip@gmail.com</h1>
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  const obj = {
    id: 111,
    age: 88
  }

  const empAge = 30;
  const myColor = true;
  const inStock = true;

  return (
    <div className="App">
      hello world
      {user}

      {/* props  */}
      <Emp name="swapnil" age={24} email="swapnil@gmail.com"/>
      <Emp name="shubham" age={23} email="shubham@gmail.com"/>
      <Emp name="Rakesh" age={25} email="rakesh@gmail.com"/>

      {/* 2 ways to import css  */}
      <div className='MyClass1'>Monday</div>
      <div className={style.MyClass2}>Monday</div>
      <div style={{color:"white", backgroundColor:"black"}}>
          Wednesday
      </div>

      {/* conditional rendering */}
      <div>
        <h3>{empAge >= 20 ? <u>can work</u>:<i>cannot work</i>}</h3>
        <h3 style={{color: myColor ? "green":"red"}}>This is COLOR </h3>

        {inStock && <button>Buy Now</button>}
      </div>
    </div>
  );
}

const Emp = (props) =>{
  console.log(props)
  return (
    // <div>
    //   <div>Swapnil</div>
    //   <div>24</div>
    //   <div>s@ggmail.com</div>
    // </div>

    <div>
      <h6>{props.name}</h6>
      <h6>{props.age}</h6>
      <h6>{props.email}</h6>
    </div>
  )
}

export default App;
