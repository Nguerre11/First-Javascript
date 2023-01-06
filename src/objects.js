function solution(car) {
    if(car.licensePlate)
    {
        car.drivingLicense = true;
        return car;

    }
    else
    {
        car.drivingLicense = false;
        return car;

    }

  }
  solution({color: 'red', brand: 'Kia', licensePlate:"HODJFJ"});
  ////////////////////////////////////////////////////////////

  function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
      if (cars.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }
  solution({color: 'red', brand: 'Kia', licensePlate:"HODJFJ"});


  