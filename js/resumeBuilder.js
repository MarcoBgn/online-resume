var bio = {
      'name': HTMLheaderName.replace("%data%", 'Marco Bagnasco'),
      'role': HTMLheaderRole.replace("%data%", 'Junior Web Developer'),
      'contacts': {
        'email': HTMLemail.replace("%data%", 'admin@hecticmojo.com'),
        'mobile': HTMLmobile.replace("%data%", '0777 - 404XXXX'),
        'location': "London, Liverpool Street"
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
    'developer' : {
      'position': HTMLworkTitle.replace("%data%", "Junior Developer"),
      'employer': HTMLworkEmployer.replace("%data%", 'Freelance'),
      'dates': HTMLworkDates.replace("%data%", '10/2015 - present'),
      'location': HTMLworkLocation.replace("%data%", 'London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Front-End (JavaScript/Angular), Back-End (Ruby/RubyOnRails), OpenSource (Git/GitHub)")
    },
    'manager' : {
      'position': HTMLworkTitle.replace("%data%", "Manager"),
      'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
      'dates': HTMLworkDates.replace("%data%", '1/2016 - 06/2016'),
      'location': HTMLworkLocation.replace("%data%", 'London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Recruitment and Training, Quality Control, Teaching.")
    },
    'teacher': {
      'position': HTMLworkTitle.replace("%data%", "Music Teacher"),
      'employer': HTMLworkEmployer.replace("%data%", 'Young Harmonisers UK'),
      'dates': HTMLworkDates.replace("%data%", '10/2014 - 01/2016'),
      'location': HTMLworkLocation.replace("%data%", 'London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Drums Teaching up to Grade 5, Piano Assistance, Music Theory")
    },
    'Retail': {
      'position': HTMLworkTitle.replace("%data%", "Sales/Team Leader"),
      'employer': HTMLworkEmployer.replace("%data%", 'Various'),
      'dates': HTMLworkDates.replace("%data%", '9/2008 - 06/2012'),
      'location': HTMLworkLocation.replace("%data%", 'Savona / London'),
      'workDescription': HTMLworkDescription.replace("%data%", "Sales, Customer assistance, Business supervision")
    },
    'Computer Engineer': {
      'position': HTMLworkTitle.replace("%data%", "Computer Engineer"),
      'employer': HTMLworkEmployer.replace("%data%", 'Telmec S.N.C.'),
      'dates': HTMLworkDates.replace("%data%", '1/1999 - 06/2006'),
      'location': HTMLworkLocation.replace("%data%", 'Carcare (SV)'),
      'workDescription': HTMLworkDescription.replace("%data%", "Computer system assembling, LAN, Helpdesk, onsite assistance")
    },
    display() {
      for (var index in work) {
        $('#workExperience').append(HTMLworkStart, work[index].position, work[index].dates, work[index].location, work[index].employer, work[index].workDescription);
      }
    }
  }

var education = {
    'degree': {
      'institution': HTMLschoolName.replace("%data%", "BIMM London - UWL").replace("#%website%", "http://www.bimm.co.uk"),
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
      'institution': HTMLschoolName.replace("%data%", "Makers Academy").replace("#%website%", "http://www.makersacademy.com"),
      'degree': HTMLschoolDegree.replace("%data%", 'Ronin'),
      'location': HTMLschoolLocation.replace("%data%", 'London'),
      'dates': HTMLschoolDates.replace("%data%", '11/2015 - 04/2016')
    },
    'udacity': {
      'institution': HTMLschoolName.replace("%data%", "Udacity").replace("#%website%", "http://www.udacity.com"),
      'degree': HTMLschoolDegree.replace("%data%", 'Front-End Nano-Degree'),
      'location': HTMLschoolLocation.replace("%data%", 'Online'),
      'dates': HTMLschoolDates.replace("%data%", '06/2016 - present')
    },
    display() {
      for (var index in education) {
        $('#education').append(HTMLschoolStart, education[index].institution, education[index].degree, education[index].location, education[index].dates);
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
