import React, { useEffect} from "react";

export default function Appp() {
    useEffect(() => {
        console.log("Hello, World!");
    },[])
    // const [state, setState] = useState(0);
    

    return (
        <div>
            <h1>Unmount</h1>
        </div>
    );
}


// export default class Containss extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//             }
//             }

// }