// 1. Define the shout function
function shout(string) {
    return string.toUpperCase();
  }
  
  // 2. Define the whisper function
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // 3. Define the logShout function
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // 4. Define the logWhisper function
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // 5. Define the sayHiToHeadphonedRoommate function
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  