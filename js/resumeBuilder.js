var formattedName = HTMLheaderName.replace("%data%", 'Marco Bagnasco');
var formattedRole = HTMLheaderRole.replace("%data%", 'Junior Web Developer');
var formattedEmail = HTMLemail.replace("%data%", 'admin@hecticmojo.com');
var formattedMobile = HTMLmobile.replace("%data%", '0777 - 404XXXX');

var formattedWorkTitleM = HTMLworkTitle.replace("%data%", 'Manager/Teacher');
var formattedWorkTitleT = HTMLworkTitle.replace("%data%", 'Music Teacher');
var formattedWorkDates = HTMLworkDates.replace("%data%", '10/2015 - 06/2016');
var formattedWorkLocation = HTMLworkLocation.replace("%data%", 'East London');
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK');

var bio = {
      'name': formattedName,
      'role': formattedRole,
      'contacts': {
        'email': formattedEmail,
        'mobile': formattedMobile
      },
      'pictureURL': 'images/pic.jpg',
      'welcome': 'Welcome to my website',
      'skills': [
        'Ruby', 'RoR', 'JavaScript', 'AngularJS', 'TDD', 'OOP'
      ]
    };

var work = {
    'last' : {
      'position': formattedWorkTitleM,
      'employer': formattedWorkEmployer,
      'dates': formattedWorkDates,
      'workLocation': formattedWorkLocation
    },
    'teacher': {
      'position': formattedWorkTitleT,
      'employer': formattedWorkEmployer,
      'dates': formattedWorkDates,
      'workLocation': formattedWorkLocation
    }

  }

var education = {
    'institution': 'BIMM London',
    'type': 'Degree',
    'title': 'BA(Hons)',
    'location': 'London',
    'subjects': [
      { 'Music Technology': ['ProTools', 'Logic ProX', 'Ableton Live']},
      'Music Pedagogy',
      'Business and Publishing',
      'Recording Skills'
    ]
  }

$('#header').prepend(bio.name).append(bio.role);
$('#header').append(bio.contacts['email'], bio.contacts['mobile']);
$('#workExperience').append(HTMLworkStart, work.last.position, work.last.dates, work.last.workLocation, work.last.employer);
$('#workExperience').append('<hr>');
$('#workExperience').append(HTMLworkStart, work.teacher.position, work.teacher.dates, work.teacher.workLocation, work.teacher.employer);
