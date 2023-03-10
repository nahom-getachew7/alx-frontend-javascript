function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  function getLast() {
    return ' is okay';
  }
  
  function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  
  export { taskFirst, taskNext };
  