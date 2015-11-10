var calculator_variables=
{
  input:
  [
    //input variables
    {
      vname :"u1",
      explain:"Voltage",
      fillvalue:  "5.0",
      unit: "Volt(s)"
    },
    {
      vname: "i1",
      explain: "Current",
      fillvalue: "9.0",
      unit: "Amp(s)"
    },
    {
      vname: "t1",
      explain: "Time",
      fillvalue: "3.4892",
      unit: "Second(s)"
    }
  ],
  result:
  [
    {
      vname:"p1",
      explain:"Power",
      formula:function(){
        return i1*u1;
      },
      unit:"Watt(s)",
      precision:3 //3 digit beyond dot
    },
    {
      vname:"w1",
      explain:"Work",
      formula:function(){
        return p1*t1;
      },
      unit:"Joule(s)",
      precision:4 //4 digit beyond dot
    }
  ],
  introduction: "Online Calculator for Power and Work",
  author:"Designed by Qin Yongliang, available on GitHub as \"OnlineCalculatorTemplate\""
};
