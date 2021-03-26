/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
	username: "Majedul Hasan",
	title: "Hi all, I'm Majedul",
	subTitle: emoji(
		"A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
		),
	resumeLink:
	"https://drive.google.com/file/d/1_dHZP5r7NwLjxBz5IXwmNWOL7X7-Ek7K/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/Majedul-Hasan",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "hasanmajedul@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/h.majedul",
//   medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13937484/majedul-hasan",
  instagram: 'https://www.instagram.com/majedul.hasan_m31',
  twitter: 'https://twitter.com/hmajedul',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
	emoji(
		"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
	emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
	emoji(
		"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		)
	],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
  	skillName: "html-5",
  	fontAwesomeClassname: "fab fa-html5"
  },
  {
  	skillName: "css3",
  	fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
  	skillName: "sass",
  	fontAwesomeClassname: "fab fa-sass"
  },
  {
  	skillName: "JavaScript",
  	fontAwesomeClassname: "fab fa-js"
  },
  {
  	skillName: "reactjs",
  	fontAwesomeClassname: "fab fa-react"
  },
  {
  	skillName: "nodejs",
  	fontAwesomeClassname: "fab fa-node"
  },
//   {
//   	skillName: "swift",
//   	fontAwesomeClassname: "fab fa-swift"
//   },
  {
  	skillName: "npm",
  	fontAwesomeClassname: "fab fa-npm"
  },
//   {
//   	skillName: "sql-database",
//   	fontAwesomeClassname: "fas fa-database"
//   },
  {
  	skillName: "firebase",
  	fontAwesomeClassname: "fas fa-fire"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
  	schoolName: "Jagannath University of Dhaka",
  

 logo: require("./assets/images/jagannathUniversity.png"),
	
  	subHeader: "Bachelor of Science in Physics",
  	// duration: "September 2009 - April 2014",
  	desc: "Participated in the research of EM rediation.",
  	descBullets: [
  	"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  	]
  },
  {
  	schoolName: "Narsingdi Govt. College",
  	logo: require("./assets/images/narsingdiGovtCollege.png"),
  	subHeader: " Higher Secondary Certificate in science",
  	// duration: "September 2013 - April 2017",
  	desc:
  	"I have studied here for 2 years  ",
  	descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  },
  {
  	schoolName: "Madhabdi S.P. Institution",
  	logo: require("./assets/images/Mspi.png"),
  	subHeader: "Higher Secondary Certificate in science",
  	// duration: "September 2013 - April 2017",
  	// desc:
  	// "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  	// descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
  {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
  },
  {
  	Stack: "Backend",
  	progressPercentage: "70%"
  },
  {
  	Stack: "Programming",
  	progressPercentage: "90%"
  }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
  	role: "Software Engineer",
  	company: "PriyaHasan it",
  	companylogo: require("./assets/images/priyaHasanlogo.png"),
  	date: "September 2020 – Present",
  	desc:
  	"Changing lives of developers one line of code at a time.",
  	descBullets: [
  	"Custom building applications",
  	"Coaching",
  	"Streaming live on YouTube",
  	"Creating tutorials"
  	]
  },
  {
  	role: "Instructrotor",
  	company: "OnlineSchool",
  	companylogo: require("./assets/images/oLS.jpg"),
  	date: "march 2020- present",
  	desc:
  	"I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
  },
  {
  	role: "Mathematics Teacher",
  	company: "Shahajpath High School",
  	companylogo: require("./assets/images/shahajpath.png"),
  	date: "October 2017 – March 2020",
  	desc:
  	"My responsibility was to teach Math and Physics"
  },
  {
  	role: "Researching, Script writing & Derection",
  	company: "Desh Telivition",
  	companylogo: require("./assets/images/deshtvlogo.jpg"),
  	date: "October 2015 – june 2018",
  	desc:
  	"My responsibility was to Researching about the topic, Script writing for shooting and Derection from back to the camera & editing pennel"
  }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Majedul-Hasan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Big Projects",
	subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
	projects: [
	{
		image: require("./assets/images/saayaHealthLogo.webp"),
		projectName: "Saayahealth",
		projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		footerLink: [
		{
			name: "Visit Website",
			url: "fa"
		}
        //  you can add extra buttons here.
        ]
    },
    {
    	image: require("./assets/images/nextuLogo.webp"),
    	projectName: "Nextu",
    	projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    	footerLink: [
    	{
    		name: "Visit Website",
    		url: ""
    	}
    	]
    }
    ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
	"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

	achievementsCards: [
	{
		title: "Google Code-In Finalist",
		subtitle:
		"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
		image: require("./assets/images/codeInLogo.webp"),
		footerLink: [
		{
			name: "Certification",
			url:
			""
		},
		{
			name: "Award Letter",
			url:
			""
		},
		{
			name: "Google Code-in Blog",
			url:
			""
		}
		]
	},
	{
		title: "Google Assistant Action",
		subtitle:
		"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
		image: require("./assets/images/googleAssistantLogo.webp"),
		footerLink: [
		{
			name: "View Google Assistant Action",
			url:
			""
		}
		]
	},

	{
		title: "PWA Web App Developer",
		subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
		image: require("./assets/images/pwaLogo.webp"),
		footerLink: [
		{name: "Certification", url: ""},
		{
			name: "Final Project",
			url: ""
		}
		]
	}
	],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
	"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
	{
		url:
		"https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
		title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
		description:
		"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
	},
	{
		url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
		title: "Why REACT is The Best?",
		description:
		"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
	}
	],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		""
		),

	talks: [
	{
		title: "",
		subtitle: "",
		slides_url: "",
		event_url: ""
	}
	],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Contact Me ☎️"),
	subtitle:
	"Discuss a project or just want to say hi? My Inbox is open for all.",
	number: "(+881) 68 214 383",
	email_address: "hasanmajedul@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hmajedul", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails
};
