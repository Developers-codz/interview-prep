// string to html object based

const string = "div{h1{Hello}p{World}b{Bold}}"

// function parseToHTML(str) {
//     let i = 0; // pointer to track current character
  
//     function parse() {
//       let result = ''; // stores parsed HTML at current level
  
//       while (i < str.length) {
//         if (str[i] === '}') {
//           // end of current block
//           i++;
//           return result;
//         } 
//         else if (/[a-z0-9]/i.test(str[i])) {
//           // found a tag name
//           let tag = '';
//           while (/[a-z0-9]/i.test(str[i])) {
//             tag += str[i++];
//           }
  
//           if (str[i] === '{') {
//             // parse inner content recursively
//             i++;
//             const content = parse();
//             result += `<${tag}>${content}</${tag}>`;
//           }
//         } 
//         else {
//           // plain text (like Hello, World)
//           result += str[i++];
//         }
//       }
  
//       return result;
//     }
  
//     return parse(); // start parsing
//   }


function parseToHTML(str) {
    let i = 0;
  
    function parse() {
      let result = '';
  
      while (i < str.length) {
        if (str[i] === '}') {
          i++;
          return result;
        }
  
        // If next few characters form a tag followed by '{'
        if (/[a-z0-9]/i.test(str[i])) {
          let tag = '';
          let j = i;
          while (/[a-z0-9]/i.test(str[j])) j++;
  
          // Check if next non-letter is '{'
          if (str[j] === '{') {
            // It's a tag: parse() recursively parses the content inside the braces for this tag
            tag = str.slice(i, j);
            i = j + 1; // move past '{'
            // parse() is called recursively to process everything inside the current tag's braces
            const content = parse();
            result += `<${tag}>${content}</${tag}>`;
            continue;
          }
        }
  
        // Otherwise it's plain text
        result += str[i++];
      }
  
      return result;
    }
  
    return parse();
  }
  
  
  // Example to test
  console.log("div{h1{Hello}p{World}b{Bold}}");
  console.log(parseToHTML("div{h1{Hello}p{World}}"));