import React from 'react';
import { NavLink } from 'react-router-dom';



const Card = (props) => {
    return (
            // <div style = {{height:400 ,width:300, borderWidth: '2', borderColor: 'black', paddingLeft:10 }}>
            //     <img style = {{backgroundColor:'white', height:250 ,width:300, objectFit:'contain'}} src= {props.imgsrc}/>

                
            //     <div style = {{backgroundColor:'gray', height:150 ,width:300,display:'flex', paddingTop: 10, alignContent:'center',alignItems:'center', flexDirection:'column'}}>
            //         <h5 className="card-title font-weight-bold">{props.title}</h5>
            //         <p className="card-text"></p>
            //         <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
            //     </div>
            // </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text"></p>
                                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>

                        
    )
}

export default Card;