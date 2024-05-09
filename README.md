# n--spoty
nFactorial Incubator application project for Task №8

Open [http://185.163.124.79:3000/feed](http://185.163.124.79:3000/feed)
(hosted on onetsolutions VPS until 11/06/24)

OR run locally

First, clone the repo
### `git clone https://github.com/Mk007V2/n--spoty.git`

Second, install the dependencies
### `npm install`

Third, run the project
### `npm start`
###### Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# About project
This is created using CRA and written all by me, Mk. 
<br/>Learning from Youtube and searching for solutions for my problems on internet.


## Used libs
Used standard react, react-dom, react-routing-dom<br/>
Used antd for time saving<br/>
Used axios for parsing<br/>
Used LIKE.png as a like button custom made in Paint 3D


## Details on implementation

### Auth 
SignIn page saves data, LogIn page verifies data
Is operational, but only saves data in memory, gets cleared every restart.

### API
API.getAll() function uses 'https://api.discogs.com/releases/' + str(x+249503) in a for x range(16) loop. Return an array<br/>
The data is saved using localStorage for the purpose of NOT getting banned for overuse.

### Header
Contains SignInItem, LogInItem and Home buttons. 

### Feed
Contains list of MusicItem providing items from local array of music priorly copied from API

### Hooks
Used standard useState, useEffect, useNavigate, useContext hooks for their intended purpose.

### Images on tracks
I have not succeeded in finding suited API that would provide with good details and images. But using this API's 'videos' property I have been able to use YouTube thumbnails as images

# Personal

I would be happy to respond to any questions regarding this project. The most difficult part for me were design and JavaScript syntax, which is greatly different from Python's. 


