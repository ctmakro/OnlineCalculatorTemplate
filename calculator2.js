var calculator_variables=
{
  input:
  [
    //input variables
    {
      vname :"s1",
      explain:"Current Density(normally 2-5)",
      fillvalue:  "3.0",
      unit: "A/mm^2"
    },
    {
      vname: "irms",
      explain: "RMS Current",
      fillvalue: "10.0",
      unit: "Amp(s)"
    },
    {
      vname: "length1",
      explain: "Wire Length",
      fillvalue: "200",
      unit: "mm"
    },
  ],
  result:
  [
    {
      vname:"a1",
      explain:"Wire Cross Sectional Area",
      formula:function(){
        return irms/s1;
      },
      unit:"mm^2",
      precision:3 //2 digit beyond dot
    },
    {
      vname:"d1",
      explain:"Wire Diameter",
      formula:function(){
        return Math.sqrt(4*a1/3.141592653);
      },
      unit:"mm",
      precision:2 //2 digit beyond dot
    },
    {
      vname:"r1",
      explain:"Resistance(Cu)",
      formula:function(){
        return length1*1.68e-8/a1/10e-6;
      },
      unit:"Ohm",
      precision:4 //2 digit beyond dot
    },
    {
      vname:"p1",
      explain:"Dissipated Resistive Power",
      formula:function(){
        return r1*irms*irms;
      },
      unit:"Watt(s)",
      precision:3 //4 digit beyond dot
    }
  ],
  introduction: "Online Calculator for HF Transformer Wire Selection",
  author:"Designed by Qin Yongliang, available on GitHub as \"OnlineCalculatorTemplate\""
};
