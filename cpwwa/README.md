# Community Public Works App

Group E was awarded a bid to complete a community web app which allows community managers to manage
reported public works incidents and also allow community members to report public work incidents. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

### Deployed Page
https://cpwwa.herokuapp.com/


### Prerequisites
(1) GitHub for cloning repo, (2) Heroku cli for deployment


### Cloning repo from GitHub
```
git clone https://github.com/UFLCENgroupE/CPWWA.git
```

### Running project locally

Option # 1) Since the app is deployed in heroku, you can also start all the process associated with your profile and then run the app locally
See https://devcenter.heroku.com/articles/config-vars#managing-config-vars for more information

Option # 2) If you want to run the project locally, then use npm install express and EJS
See https://scotch.io/tutorials/use-ejs-to-template-your-node-application for more information

### Deploy in Heroku
```
git push heroku master
```

### For more details on how to deploy to Heroku reference
```
https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
```

## App Features

See https://github.com/UFLCENgroupE/CPWWA/blob/master/cpwwa/implementations.png


## Testing

Testing for the application is done manually


### Nav Bar

Update the source code in cpwwa/views/partials/nav.ejs in your editor
```
git add .
git commit -m "(description of your code update)"
git push heroku master
```
Go to deployed site
Manually test the links in the navbar for 'Home' 'Admin Page' 'Report Incident'


### Report Incident Page
Update the source code in cpwwa/views/partials/reportpage.ejs in your editor
```
git add .
git commit -m "(description of your code update)"
git push heroku master
```
Go to deployed site
Repeat for each dropdown issue - Animal, Electrical, Fire, Road, Vandalism, Water/Flood
Enter the address in US Postal Format
Put in a description for the issue
Click Add Incident
You should see an alert that it was added successfully
Double check to see if the new document was added to mLAB successfully


### Admin Page
Update the source code in cpwwa/views/partials/adminpage.ejs in your editor
```
git add .
git commit -m "(description of your code update)"
git push heroku master
```
Go to deployed site

Refresh button -> This should load all current incidents into the Google Maps Below

Details button -> To find a case, copy, and paste the $oid unique identifier, then enter into the prompt
It will show a pop-up box with the case details

Select Record -> To find a case, copy, and paste the $oid unique identifier, then enter into the prompt
It will show the case information in the boxes below
Edit each field slightly
Click Update and a prompt will show that the information has been posted to database
Use case details button to check if the details updated successfully



### Document Schema
Here's an example record from mLab
```
[
    {
        "_id": {
            "$oid": "00101abc1def1g000hi11000"
        },
        "incidentDate": "2018/12/12",
        "incidentType": "E",
        "incidentAddress": "123 Some St City, FL 12345",
        "incidentDescription": "Power outage",
        "incidentPictureURL": "https://somecdn.com/img/12345",
        "managerNotes": "mgr notes goes here",
        "statusNotes": "Received",
        "incidentStatus": "Submitted",
        "incidentID": "A20181212",
        "incidentLat": 29.00000000,
        "incidentLong": -82.0000000000
    },
    ...
]
```

### Updating database and server connections
To update the database connections, go to all instances of where the API keys are present in the AJAX calls
These were hardcoded (see example below)

Here you see a ajax call to geocody (URL)
With the api_key 00000000000000000
So you can think of the database to look where up where the incident coordinates would be is at the geocody endpoint
And the API keys are hardcoded in this ajax GET call

```
var cords	=	$.ajax({
			    async: false,
			    url: 'https://geocody.expeditedaddons.com',
			    
			    method: 'GET',
			    
			    data: {
			          'api_key': '00000000000000000',
			          'address': incidentAddress,
			          'country_code': 'US',
```

In a future version, making a config/keys.js is highly recommended to store all the API keys and database conections



## Built With

* HTML / Javascript / JQuery / AJAX - Tech stack
* BOOTSTRAP (https://getbootstrap.com/docs/3.3/) - For CSS styling
* Google Maps API (https://developers.google.com/maps/documentation/) - For embedding maps 
* [Geocody](https://devcenter.heroku.com/articles/geocody#provisioning-the-add-on) - Used to decode user entered public works addresses
* [mLab](https://docs.mlab.com/) - Used for storing all information on public works reported
* [3rd Party Code] (http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js) - Google Maps Cluster


## Authors

* ** Chi Kwan ** 
* ** Taylor Dekalb **
* *** Initial work @ *** [CPWWA](https://github.com/UFLCENgroupE/CPWWA)

## License

None

## Acknowledgments

* Thanks Dr. Gardner for feedback and suggestions during sprint meetings 
