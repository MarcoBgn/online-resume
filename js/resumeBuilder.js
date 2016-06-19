var bio = {
      'name': HTMLheaderName.replace("%data%", 'Marco Bagnasco'),
      'role': HTMLheaderRole.replace("%data%", 'Junior Web Developer'),
      'contacts': {
        'email': HTMLemail.replace("%data%", 'admin@hecticmojo.com'),
        'mobile': HTMLmobile.replace("%data%", '0777 - 404XXXX')
      },
      'pictureURL': 'images/fry.jpg',
      'welcome': 'Welcome to my website',
      'skills': [
        'Problem Solver', 'Team Work', 'Ruby / Ruby on Rails', 'JavaScript / AngularJS', 'TDD'
      ],
      display() {
        $('#header').append(bio.name).append(bio.role);
        $('#header').append(bio.contacts['email'], bio.contacts['mobile']);
      },
      displaySkills() {
        if (bio.skills.length > 0) {
          var formattedSkill, i = 0;
          $('#header').append(HTMLskillsStart);

          for (var index in bio.skills) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
            $('#skills').append(formattedSkill);
            i++;
          }
        }
      }
    };

var work = {
    'last' : {
      'position': HTMLworkTitle.replace("%data%", "Manager"),
      'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
      'dates': HTMLworkDates.replace("%data%", '1/2016 - 06/2016'),
      'location': HTMLworkLocation.replace("%data%", 'London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Recruitment and Training, Quality Control, Teaching.")
    },
    'teacher': {
      'position': HTMLworkTitle.replace("%data%", "Music Teacher"),
      'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
      'dates': HTMLworkDates.replace("%data%", '10/2015 - 01/2016'),
      'location': HTMLworkLocation.replace("%data%", 'London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Drums Teaching up to Grade 5, Piano Assistance, Music Theory")
    },
    display() {
      for (var index in work) {
        $('#workExperience').append(HTMLworkStart, work[index].position, work[index].dates, work[index].location, work[index].employer, work[index].workDescription);
        $('#workExperience').append('<hr>');
      }
    }
  }

var education = {
    'degree': {
      'institution': HTMLschoolName.replace("%data%", "BIMM London - UWL"),
      'degree': HTMLschoolDegree.replace("%data%", 'BA(Hons)'),
      'location': HTMLschoolLocation.replace("%data%", 'London'),
      'dates': HTMLschoolDates.replace("%data%", '10/2012 - 06/2015'),
      'skills': [
        'Music Technology',
        'Music Pedagogy',
        'Business and Publishing',
        'Recording Skills'
      ]
    },
    'makers': {
      'institution': HTMLschoolName.replace("%data%", "Makers Academy"),
      'degree': HTMLschoolDegree.replace("%data%", 'Ronin'),
      'location': HTMLschoolLocation.replace("%data%", 'London'),
      'dates': HTMLschoolDates.replace("%data%", '11/2015 - 04/2016')
    },
    'udacity': {
      'institution': HTMLschoolName.replace("%data%", "Udacity"),
      'degree': HTMLschoolDegree.replace("%data%", 'Front-End Nano-Degree'),
      'location': HTMLschoolLocation.replace("%data%", 'Online'),
      'dates': HTMLschoolDates.replace("%data%", '06/2016 - present')
    },
    display() {
      for (var index in education) {
        $('#education').append(HTMLschoolStart, education[index].institution, education[index].degree, education[index].location, education[index].dates);
        $('#education').append('<hr>');
      }
    }
  }

  var projects = {
    'githubVanilla' : {
      'projTitle': HTMLprojectTitle.replace("%data%", "GitHub API - Vanilla JavaScript"),
      'dates': HTMLprojectDates.replace("%data%", "May 2016"),
      'projDescription': HTMLprojectDescription.replace("%data%", "Public repositories query - Built using vanilla JS"),
      'image': HTMLprojectImage.replace("%data%", "images/githubVanilla.png"),
    },
    'bbcIplayer': {
      'projTitle': HTMLprojectTitle.replace("%data%", "BBC iPlayer Lister"),
      'dates': HTMLprojectDates.replace("%data%", "May 2016"),
      'projDescription': HTMLprojectDescription.replace("%data%", "API query, with pagination and filters - Built with AngularJS"),
      'image': HTMLprojectImage.replace("%data%", "images/iplayer.png"),
    },
    'fairMuse': {
      'projTitle': HTMLprojectTitle.replace("%data%", "FairMuse"),
      'dates': HTMLprojectDates.replace("%data%", "April 2016"),
      'projDescription': HTMLprojectDescription.replace("%data%", "FullStack App, built in a team of 4 as final project @Makers Academy- Built with AngularJS served by Ruby on Rails API"),
      'image': HTMLprojectImage.replace("%data%", "images/fairmuse.png"),
    },
    display() {
      for (var index in projects) {
        $('#projects').append(HTMLprojectStart, projects[index].projTitle, projects[index].dates, projects[index].projDescription, projects[index].image);
      }
    }
  }

bio.display();
bio.displaySkills();
work.display();
education.display();
projects.display();
$('#mapDiv').append(googleMap);
