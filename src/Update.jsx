import React from "react";
import Fav from './images/cap.jpg';
import Thum from './images/thum.jpg';
import Thum2 from './images/thum2.jpg';
import Thum3 from './images/thum3.jpg';
import Card from './Card';
export default class Update extends React.Component{
    render(){
        return(
            <>
            <div className="update">
                <div className="head">
                    <a>Updates</a>
                </div>
                <Card 
                    imglogo={Fav} 
                    acc="Capsitech" 
                    follow="1,416 followers" 
                    time="2W" 
                    para="Capsitech is hiring technical developers
                    Reach out to get a chance to work with the best of technical prodigies.
                    Send your resume at www.capsitech.com"
                    post={Thum}
                    like="27"
                    comment="2 comments"
                 />

<Card 
                    imglogo={Fav} 
                    acc="Capsitech" 
                    follow="1,416 followers" 
                    time="2mo" 
                    para="Live as if you were to die tomorrow. Learn as if you were to live forever.” - Mahatma Gandhi
We must fight for peace bravely as we fought in war. - Lal Bahadur Shastri"
                    post={Thum2}
                    like="27"
                    comment="25 comments"
 />

<Card 
                    imglogo={Fav} 
                    acc="Capsitech" 
                    follow="1,416 followers" 
                    time="5mo" 
                    para="Reach out to us and get a chance to work with the best of technical prodigies.Send us your resume at www.capsitech.com"
                    post={Thum3}
                    like="5k"
                    comment="200 comments"
 />


            </div>
            </>
        )
    }
}