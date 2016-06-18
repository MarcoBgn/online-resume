var bio = {
      'name': formattedName,
      'role': formattedRole,
      'contacts': {
        'email': formattedEmail,
        'mobile': formattedMobile
      },
      'pictureURL': 'images/fry.jpg',
      'welcome': 'Welcome to my website',
      'skills': [
        'Problem Solver', 'Team Work', 'Ruby / Ruby on Rails', 'JavaScript / AngularJS', 'TDD'
      ]
    };

var work = {
    'last' : {
      'position': formattedWorkTitleM,
      'employer': formattedWorkEmployer,
      'dates': formattedWorkDatesM,
      'workLocation': formattedWorkLocation,
      'workDescription': formattedWorkDescM
    },
    'teacher': {
      'position': formattedWorkTitleT,
      'employer': formattedWorkEmployer,
      'dates': formattedWorkDatesT,
      'workLocation': formattedWorkLocation,
      'workDescription': formattedWorkDescT
    }

  }

var education = {
    'degree': {
      'institution': formattedSchoolName,
      'degree': formattedSchoolDegree,
      'schoolLocation': formattedSchoolLocation,
      'dates': formattedSchoolDates,
      'skills': [
        'Music Technology',
        'Music Pedagogy',
        'Business and Publishing',
        'Recording Skills'
      ]
    },
    'makers': {
      'institution': formattedSchoolNameMA,
      'degree': formattedSchoolDegreeMA,
      'schoolLocation': formattedSchoolLocationMA,
      'dates': formattedSchoolDatesMA
    },
    'udacity': {
      'institution': formattedSchoolNameU,
      'degree': formattedSchoolDegreeU,
      'schoolLocation': formattedSchoolLocationU,
      'dates': formattedSchoolDatesU
    }
  }

  var projects = {
    'githubVanilla' : {
      'projTitle': formattedProjectTitleGH,
      'dates': formattedProjectDatesGH,
      'projDescription': formattedProjectDescGH,
      'image': formattedProjectImageGH,
    },
    'bbcIplayer': {
      'projTitle': "formattedProjectTitleBBC",
      'dates': "formattedProjectDatesBBC",
      'projDescription': "formattedProjectDescBBC",
      'image': "formattedProjectImageBBC",
    },
    'fairMuse': {
      'projTitle': "formattedProjectTitleFM",
      'dates': "formattedProjectDatesFM",
      'projDescription': "formattedProjectDescFM",
      'image': "formattedProjectImageFM",
    }
  }

if (bio.skills.length > 0) {
  var formattedSkill, i = 0;
  $('#header').append(HTMLskillsStart);

  for (var index in bio.skills) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
    $('#skills').append(formattedSkill);
    i++;
  }
}

$('#header').append(internationalizeButton);
$('#header').append(bio.name).append(bio.role);
$('#header').append(bio.contacts['email'], bio.contacts['mobile']);

(function displayWork() {
  for (var index in work) {
    $('#workExperience').append(HTMLworkStart, work[index].position, work[index].dates, work[index].workLocation, work[index].employer, work[index].workDescription);
    $('#workExperience').append('<hr>');
  }
}());

(function displayEdu() {
  for (var index in education) {
    $('#education').append(HTMLschoolStart, education[index].institution, education[index].degree, education[index].schoolLocation, education[index].dates);
    $('#education').append('<hr>');
  }
}());

(function displayProjects() {
  $('#projects').append(HTMLprojectStart, projects.githubVanilla.projTitle, projects.githubVanilla.dates, projects.githubVanilla.projDescription, projects.githubVanilla.image);
}());
