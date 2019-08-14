# JavaScript Development
1. Declarations
   1. The 'var' keyword to declare the variable
   2. This is the 'dynamic declaration' aka 'late binding'
   3. The Function Scope Declaration by default
   4. The type of declaration will be set based on right-hand-side of the declaration expression.
2. Equality Syntaxes
   1. == value equality
   2. === deep equality
3. Objects
   1. 'Everything' is object
      1. string, number, function, array, object
   2. Object Types 
      1. function declared object
      2. Date object
      3. object literal aka JSON objects
         1. The Key:Value pair
         2. Syntax: var obj = {KEY1:VALUE1,.....}; 
4. Functions
   1. Closed-Type functios aka function with name  and body
      1. function abc(){......}
      2. May return a single object using 
         1. return{}; syntax
         2. Everything is inside {} of return is 'public' by default
   2. Reference type functions aka a variable stores reference of function
      1. var x =function(){......}
      2. All 'this' referred declarations are public by default
   3. Immediately-Invoked-Function-Expression (IIFE) aka self-executable functions
5. Expressions
6. Strings
7. Modules (ES6)
   1. Object Oriented Programming
8. Compilation (ES6)

#=============== ES 6 Programming
1. ES 6 Configuration
   1. prerequisites
      1. Node.js https://www.nodejs.org
      2. The 'Node.js' command prompt
      3. The 'npm' command line utility
   2. The package.json
      1. The file will be created using
         1. The 'npm init' command, ths will provide "Command line wizard"
         2. The 'npm init -y' command to create package.json with defaults 
      2. This is the file for defining
         1. app. development packages
            1. They are mentioned in 'devDependencies' section of pacakge.json
            2. Dev. Dependencies are installed using
               1. npm install --save-dev <PACKAGE-NAME1> <PACKAGE-NAME2>....
         2. app. execution packages
            1. They are the packages needed to be installed on production machine to execute the package
               1. npm install <PACKAGE-NAME> / npm install --save  <PACKAGE-NAME>.
            2. These packages will  be listed inside 'dependencies'  section of package.json
         3. Build/test/run configuration
         4. We can directly specify packages with their versions in dependencies section of package.json and directly run 'npm install' command. 
         5. Please visit https://www.npmjs.com
      3. The 'scripts' section that contains commands for
         1. test
         2. start
         3. buid
      4. Install and configure the transpiler
         1. Use @babel/core package for ES 6 to JavaScript (ES 5) transpilation
         2. Use @babel/cli, command line utility for transpilation
         3. Use @babel/preset-es2015 for ES 6 to ES 5 for modules and other methods (?)
         4. ES 6 is concept ans ES2015 is library Object Model for ES 6
         5. ES 7 --> ES 2016
         6. ES 8 --> ES 2017
         7. esnext --> ES 2018
2. Understanding Concepts
   1. Scope 
      1. The block scope provided by ES6.
      2. The 'let' keyword is used to declare the block scope
   2. Template String
      1. New the syntax for string concatination
      2. `Saome String ${<EXPRESSION/PLACEHOLDER>}`
   3. Array and its methods
      1. Array is class aka type
      2. The array declaration 
         1. let x =[]; will be directly declared as an instance of array class
      3. Methods
         1. push(), pop(), shift(), unshift(), splice(), slice()
         2. foreach(), map()
         3. sort(), reverse(), filter()
   4. Iterators
      1. looping over the collection
      2. for..loop
      3. for..in loop (Simple syntax for for..loop)
      4. for..of loop, new in ES6 ans transpiled into Symbol.iterator() object for iteration  
   5. Arrow Operator
      1. If a method is acceting callback function as input parameter then use Arrow Operator as input parameter instaed of Callback function
   6. String and its methods
   7. Object Oriented programming
      1. Class
         1. Everything is public
         2. The 'this' scope for the public access for data members
         3. The 'extends' keyword for inheritance
         4. Use Oops for modularity
      2. No support for method overloading
         1. But there is a support for 'rest' parameter
            1. ...<NAME-OF-PARAMETER>
               1. internally this is used as an 'arguments' array with the expression as
                  1. arguments = Object.assing({},arguments)
   8. Modules
3. Programming 
   1. Transpile the ES6 JavaScript in ES 5 or ES 3
   2. npm install -g @babel/core @babel/cli @babel/preset-es2015
   3. Use babel cli for transoilation
      1. babel --presets es2015 <source-file>.js -o <Target-Path>/<targetouput>.js  

#==================================================================================================================================================

# JavaScript DOM Programming
1. The 'window' object, that represents the current browser instance
2. The 'document' object, representing the 'current DOM in window object' 
   1. document.getElementById('<Id of DOM Element>') , return a single DOM object
   2. document.
      1. getElementsByName('<name attribute>')
      2. getElementsByTagName('<DOM tag name>')
      3. getElementsByClassName('<class attribute>')
   3. Eventing System
      1. document.addEventListener('<event-name>', callback function to invoke for event, <boolean to keep event attached >), method to define an event for DOM Element(s)
         1. onChange --> change
         2. onBlur --> blur
         3. onClick --> click
         4. onKeyUp --> keyup