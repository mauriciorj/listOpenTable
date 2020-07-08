##1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
<br />
I spent around 6 hours and if I had more time I could improved the style, insert images and added more controls<br />

##2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
<br />
```javascript
useEffect(() => {
    if(prevState !== nextState){
        updateState
    }
},[state])
```
<br />
##3.	What were the more challenging parts of this assignment for you?
<br />
Pagination
<br />
##4.	How would you track down a performance issue in production? Have you ever had to do this?
<br />
A bad performance can be due memory, time, lots of reders and request
<br />
You can check the server performance or the database performance
<br />
You can also make tests to check the reder cycle
<br />
##5.	How would you improve the API that you just used?
<br />
Improve the security and implement cookies.
<br />
##6.	Please describe yourself using JSON.
```javascript
{
    personal:{
        firstName: "Mauricio",
        lastName: "Mesquita",
        address: "Toronto",
        passion: "Code"
    },
    skills:{
        frontend: "HTML5, CSS3, Bootstrap, Javascript, React, Redux",
        backend: "NodeJs, Express",
        database: "MongoDb, SQL"
    },
    experience:{
        javascript: "3 yrs",
        react: "2 yrs",
        redux: "2 yrs",
        database: "4 yrs"
    }
    softskills:{
        strong: "Team Player, Communication, Adaptability"
    }
}
```