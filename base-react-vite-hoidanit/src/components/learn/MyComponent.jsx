//JSX
//Fragment

import './style.css'
const MyComponent = () => {
    // const hoidanit = "Eric"; //string
    // const hoidanit = 25; //string
    // const hoidanit = true; //string
    const hoidanit = {
        name: "Eric",
        age: 25
    }
    return (
        <>
            <div > {hoidanit.name} & hoidanIT</div>
            <div > {JSON.stringify(hoidanit)} & hoidanIT</div>
            <div> {console.log("eric")}</div>
            <div className="child">child</div>
        </>
    );
}

export default MyComponent