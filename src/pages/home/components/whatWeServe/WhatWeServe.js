
import './WhatWeServe.css';
import { values } from './data/ValuesData';


function WhatWeServe() {
    return (

        <section className="whatWeServe">
            <div className='heading'>
                <h2>What we serve</h2>
                <h1>Top Values For You</h1>
                <p>Embrace life's vastness, venture forth,</p>
            </div>

            <div className="values">
                {values.map((value, index) => (
                    <div key={index} className='card'>
                        <img src={value.image} alt={value.alt} />
                        <h3>{value.heading}</h3>
                        <p>{value.paragraph}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default WhatWeServe;