import React, {useEffect, useState} from 'react';
import Img from  '../ass/img.png'
// const profile={
//     name:'',
//     biography:''
// }
const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json)
    }
    useEffect(() => {fetchData()},[url]);

    return data;
};

const Photo =()=>{
    return (
        <React.Fragment>
            <img className="photo" src={Img}/>
        </React.Fragment>
    )

}

function Name({text}){
    return <div className="name">{text}</div>
}
function Biography({text}){
    return (
        <>
            <p className="biography">
                {text}
            </p>
        </>
    )

}
Profile.propTypes = {

};
function Profile({}) {

   const data = useFetch("http://localhost:3000/users/");
    if (!data) {
        return <div>Loading...</div>;
    }else {
        return (
            <div>
                <Photo/>
                <Name text={data[0].name}/>
                <Biography text={data[0].biography}/>
            </div>
        );
    }
}

export default Profile;
