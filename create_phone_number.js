// My solution for Create Phone Number
function createPhoneNumber(numbers){
  first = (numbers.slice(0,3)).toString();
  middle = (numbers.slice(3,6)).toString();
  end = (numbers.slice(6,10)).toString();
  return `(${first}) ${middle}-${end}`.replaceAll(",","");
}
