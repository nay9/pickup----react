## REACT JS Final Project

This is our first React project which is fully separated from our Java backend, and it is currently in progress (very exciting). See our Dev branch for latest additions. We are working on a project that will allow users to find individuals with pickup trucks to help them move (similar to uber model).

Basic functionality: posting new orders, drivers being able to accept orders, and connecting backend to separate React frontend. The primary goal of this project is to gain familiarity building React front end projects, and linking them to our Java Spring MVC backend.

## Dependencies used
    compile("org.springframework.boot:spring-boot-starter-web")
    compile('org.springframework.boot:spring-boot-starter-data-jpa')
    runtime('com.h2database:h2')
    react
    NPM
    
## Instructions for use 

Clone project from github, open project `dev` Branch - navigate to 'pickup-backend' folder - run `gradle eclipse` on this file, and import to Eclipse. Then, run application as Java project. 


Nagivate to pickup-frontend folder - dev branch run `npm start`, then run `npm audit fix`, followed by `npm install --save react-google-maps` to fire up React page (inside node modules ensure you see google-maps-react). Here you will be able to see our progress!

### What I really like?

This is our first exploration in complete decoupling of our Java backend and React front end.  These technologies are quite powerful when used together, and the possibilities of future projects are very exciting. The render process is quite smooth, and we have really learned to integrate the MVC model well with React.  

### Reference docs utilized
https://spring.io/guides 
https://start.spring.io/
https://stackoverflow.com/
https://developer.mozilla.org/en-US/docs/Web/javascript


