//jshint esversion:6

exports.getDate = function(){
  //get todays date
  const today = new Date();

  //set options for text display
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  // set day variable to processed date string
  return today.toLocaleDateString("en-US", options);

}

exports.getDay = function(){
  //get todays date
  const today = new Date();

  //set options for text display
  const options = {
    weekday: "long",
  }
  // set day variable to processed date string
  return today.toLocaleDateString("en-US", options);
}
