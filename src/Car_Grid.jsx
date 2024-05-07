import React from 'react'
const Car_Grid = () => {
    const cars = [
      {
        model: 'Mustang GT',
        type: 'FastBack',
        image: 'https://edgecast-img.yahoo.net/mysterio/api/1EEC2547D9CB67211D41228B733C209F471C1709C523B37175692AD5552D15C7/autoblog/resizefill_w1200_h720;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/07/21151710/2024-Ford-Mustang-GT-action-front-three-quarter.jpg',
      },
      {
        model: 'Porsche 911',
        type: 'Carrera',
        image: 'https://imgd.aeplcdn.com/1920x1080/cw/ec/39232/Porsche-New-911-Exterior-153677.jpg?wm=1&q=80&q=80',
      },
      {
        model: 'Toyota Supra',
        type: 'MK4',
        image: 'https://hips.hearstapps.com/hmg-prod/images/liberty-walk-toyota-supra-7-1592129370.jpg?crop=1.00xw:0.847xh;0,0.0831xh&resize=2048:*',
      },
      {
        model: 'Nissan Skyline',
        type: 'GT-R',
        image: 'https://i.gaw.to/content/photos/58/41/584100-here-s-the-japan-exclusive-2024-nissan-skyline-nismo.jpeg',
      },
    ];
    return (
      <div className="car-grid">
        {cars.map((car, index) => (
          <div key={index} className="car-item">
            <img src={car.image} alt={car.model} className="car-image" />
            <h3 className="car-model">{car.model}</h3>
            <p className="car-type">{car.type}</p>
            <button className="book-now-btn">BOOK NOW</button>
          </div>
        ))}
      </div>
    );
  };
export default Car_Grid;