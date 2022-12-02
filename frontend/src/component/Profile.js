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

   const data = useFetch("http://172.31.85.70:3000/users/");
    if (!data) {
        return <div>Loading...</div>;
    }else {
        let index = data.length -1
        return (
            <div>
                <Photo/>
                <Name text={data[index].name}/>
                <Biography text={data[index].biography}/>
            </div>
        );
    }
}

export default Profile;
