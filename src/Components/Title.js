import React from 'react';

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto mt-5 text-center text-title">
                <h3 className= "mt-5 font-weight-bold py-3">
                    {name} {title}
                </h3>
            </div>

        </div>
    )
}
