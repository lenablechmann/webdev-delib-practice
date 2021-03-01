## Javascript Classes
Even though there are no "real" OOP kind of classes in JS (apparently),
it is heavily used in React so it's important to know them well.
My goal is to learn how and when to use them, mostly so I can navigate and understand any JS codebase I encounter.

### Pros and Cons of Classes in Javascript
Classes in JS just pose constructors as something else, without changing 
anything in the inner workings of the language. Which can cause confusion and thus 
unexpected behavior if people come from OOP languages and use JS classes as
though they were Java classes.

### How does JavaScript’s object creation differ from a language like Java?
In "true" OOP languages objects are "born" from a class, while in JS you can just create
some object and assign whatever prototype you want it to have or leave it with a
standard built in prototype. Making JS very flexible in term of objects.

### What are the differences between using a class to define a constructor and other prototype methods?
There is a constructor inside the class, meanwhile the methods inside a class are assigned to the prototype of created objects.

### What are "Getters" and "Setters"?
Allows you to get or set properties outside of the class declaration.

### Function Binding
Passing around object methods willy nilly leads to "this" loss, which can be avoided either via function binding, wrapping or class fields.
