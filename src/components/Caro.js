import React, { Component } from 'react'

export class Caro extends Component {
  render() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://wallpaperaccess.com/full/20996.jpg" className="slide1" alt="..."/>
            
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.wallpapertip.com/wmimgs/81-813636_pokemon-new-tab-theme-hd-wallpapers-pokemon-tcg.jpg" className="slide2" alt="..."/>         
          </div>

          <div className="carousel-item">
            <img src="https://www.teahub.io/photos/full/172-1720388_wallpaper-cool-pokemon-wallpapers-hd.jpg" className="slide3" alt="..."/>
          </div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default Caro
