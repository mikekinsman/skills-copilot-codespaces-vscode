function skillsMember() {
  // This is a member function
  console.log(this.name + ' has the following skills: ');
  this.skills.forEach(function(skill) {
    console.log(skill);
  });
}