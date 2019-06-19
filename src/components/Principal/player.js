import React, { Component } from 'react';

class player extends Component {
    render() {
        return (
            <div className='player'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLnNJsI412dO8Q69cvpbl3yXJdjeSpFOtC" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default player;