import './App.css';
import StudentInfoComponent from "./components/StudentInfoComponent";
import "bootstrap/dist/css/bootstrap.css"
import TableHeader from "./components/TableHeader";

/*const studentInfo = */

const studentInfos = [{
    id: "1", name: "John Doe", age: 25, address: "123 Main St"
}, {id: "2", name: "Jane Doe", age: 28, address: "456 Elm St"}, {
    id: "3", name: "Mike Johnson", age: 30, address: "789 Oak St"
}, {id: "4", name: "Sarah Smith", age: 27, address: "101 Pine St"}, {
    id: "5", name: "David Brown", age: 29, address: "124 Maple St"
}, {id: "6", name: "Emily Davis", age: 31, address: "780 Walnut St"}, {
    id: "7", name: "Michael Wilson", age: 26, address: "102 Birch St"
}, {id: "8", name: "Sarah Wilson", age: 25, address: "123 Maple St"}, {
    id: "9", name: "David Brown", age: 28, address: "456 Elm St"
}, {id: "10", name: "Emily Davis", age: 30, address: "789 Oak St"}];

function App() {
    return (<div className="container p-5">
        <h1 className="text-center m-5">Student Information</h1>
        <table className='table table-sm table-primary table-responsive table-bordered table-hover table-striped'
        >
            <TableHeader/>
            {studentInfos.map(studentInfo => (
                <StudentInfoComponent id={studentInfo.id} name={studentInfo.name} age={studentInfo.age}
                                      address={studentInfo.address}/>))}
        </table>
    </div>)
}

export default App;
