export default class BMI
{
  bmiCalculateAsia(weight,heigh)
  {
    const bmi = weight/heigh**2;
    let a = " ";

    if(bmi <= 18.5)
    {
      a = "Under weight";
    }
    if(bmi > 18.5 && bmi < 24.9)
    {
      a = "Normal weight";
    }
    if(bmi > 24.9 && bmi < 29.9)
    {
      a = "Overweight";
    }
    if(bmi > 29.9)
    {
      a = "Obesity";
    }
    
    return a;
  }

  bmiCalculateWestern(weight,heigh)
  {
    const bmi = weight/heigh**2;
    let a = " ";
    if(bmi <= 28.5)
    {
      a = "Under weight";
    }
    if(bmi > 28.5 && bmi < 34.9)
    {
      a = "Normal weight";
    }
    if(bmi > 34.9 && bmi < 39.9)
    {
      a = "Overweight";
    }
    if(bmi > 
    9.9)
    {
      a = "Obesity";
    }
    
    return a;
  }


  


}