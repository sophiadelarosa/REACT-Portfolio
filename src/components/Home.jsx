import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <div class="title">Bio</div>
            <div class="row">
                <div class="columnleft">
                    <img id="profilepic" height="250px" width="250px"/> 
                </div>
                <div class="columnright">
                    <p> Hai! I'm Sophia. I have a Bachelor of Science in Journalism and International Relations and recently got my Full Stack web development certification from Georgia Institute of Technology.</p>
                    <p> I currently work as a video editor at CNN and stream video games on Twitch with the computer I built.</p>
                    <p> I'm looking forward to learning more about coding and getting into it full-time!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;