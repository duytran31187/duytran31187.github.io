const vm = new Vue({
    el: '#app',
    data() {
        return {
            top_menu: [
                {
                    name: "Skills",
                    link: "#skills"
                },
                {
                    name: "Work History",
                    link: "#work-history"
                },
                {
                    name: "Education",
                    link: "#education"
                },
                {
                    name: "Projects",
                    link: "#project"
                }
            ],
            informations: {
                infos: [
                    {
                        icon: '<i class="far fa-envelope"></i>',
                        text: 'duytran31187@gmail.com',
                    },
                    {
                        icon: '<i class="fas fa-birthday-cake"></i>',
                        text: 'November 3rd 1987',
                    },
                    {
                        icon: '<i class="far fa-flag"></i>',
                        text: 'Bao Loc city, Lam Dong Province',
                    },
                    {
                        icon: '<i class="fas fa-map-marked-alt"></i>',
                        text: '466 QL20, Loc Nga commune, Bao Loc city, Lam Dong province',
                    },
                    {
                        icon: '<i class="fas fa-mobile-alt"></i>',
                        text: '+84.799.395.384',
                    },
                    {
                        icon: '<i class="fab fa-skype"></i>',
                        text: 'duy31187'
                    }
                ],
                links: [
                    {
                        icon: '<i class="fab fa-linkedin"></i>',
                        link: 'https://www.linkedin.com/in/duy-tran-44739560/',
                        title: 'Duy Tran'
                    }
                ],
                summary: [
                    "I have about 4 years experience in <strong>HTML5/CSS3/JS, Bootstrap, JQuery, AngularJs</strong>",
                    "2+ year experience in <strong>Aws services: Ec2, s3, cloudwatch, Xray, Gateway, Codecommit, EventBridge...</strong>",
                    "10 years experience in <strong>PHP</strong> Web Application Development (<strong>Laravel, Yii2, CodeIgniter</strong>)",
                    "3+ year experience in unit tests, feature tests, auto tests with <strong>Codeception, jest</strong>",
                    "7+ year experience in <strong>Mysql</strong> Database",
                    "7+ year experience in <strong>Github/Gitlab/Teamcity</strong> CI/CD",
                    "3+ year experience in <strong>Docker - Kubernetes</strong>",
                    "4 year experience in <strong>Remote</strong> Working",
                    "7 years experience in working with foreigners"
                ]
            },
            skills: [
                {
                    name: "Technial skills",
                    skills: [
                        "HTML5/CSS3, Jquery, SASS, LESS, Css, Bootstrap, AngularJS",
                        "Angular Framework",
                        "PHP Laravel Framework, Yii2 Framework..",
                        "MySQL",
                        "Docker - Kubernetes",
                        "Github/Gitlab CI/CD",
                        "Familiar with payment gateways: Stripe, Cybersource, Payfort, Contoworks",
                    ]
                },
                {
                    name: "Workflow",
                    skills: [
                        "Version Control/Git",
                        "Apache Subversion (SVN)",
                        "Agile Scrum"
                    ]
                },
                {
                    name: "Soft Skills",
                    skills: [
                        "Communication",
                        "Teamwork",
                        "Adaptability",
                        "Googling",
                        "Problem-Solving",
                        "Creativity",
                        "Confidently communicate in english with foreigners",
                        "Researching New Technology"
                    ]
                }
            ],
            work_history: [
                {
                    job: "Senior Software Engineer",
                    company: ' | <a href="https://www.gforces.co.uk/" title="GForces">GForces</a>',
                    time_period: "Jan 1st 2019 - now",
                    job_details: [
                        {
                            name: "PHP, Angular, Aws service Fullstack Developer"
                        }
                    ]
                },
                {
                    job: "Senior Software Engineer",
                    company: ' | <a href="https://www.baolau.com/en/" title="BaoLau">BaoLau.vn</a>',
                    time_period: "July 17th 2017 - December 31st 2018",
                    job_details: [
                        {
                            name: "PHP Codeigniter framework, Javascript, html to build account management, api for company's website"
                        }
                    ]
                },
                {
                    job: "Software Engineer",
                    company: ' | <a href="http://www.elinext.com/" title="Elisoft">Elisoft</a>',
                    time_period: "April 2013 - march 2016",
                    job_details: [
                        {
                            name: "Php, js Fullstack developers for many different outsource projects"
                        }
                    ]
                },
                {
                    job: "Software Engineer",
                    company: ' | <a href="http://www.vidait.vn/" title="vida">Vida</a>',
                    time_period: "April 2013 - january 2014",
                    job_details: [
                        {
                            name: "Wordpress"
                        }
                    ]
                },
                {
                    job: "Software Engineer",
                    company: ' | <a href="http://www.uniweb.vn/" title="Uniweb">Uniweb</a>',
                    time_period: "October 2012 - april 2013",
                    job_details: [
                        {
                            name: "php zend framework to build social website"
                        }
                    ]
                },
                {
                    job: "Software Engineer",
                    company: ' | <a href="http://www.mbizglobal.net/" title="MBIZ">MBIZ</a>',
                    time_period: "June 2011 - october 2012",
                    job_details: [
                        {
                            name: "php to build internal products"
                        }
                    ]
                }
            ],
            education: [
                {
                    level: "Computer Science Bachelor Diploma",
                    school: "University of Science Ho Chi Minh City",
                    time_period: "2006 - 2011",
                    address: "Ho Chi Minh City"
                }
            ],
            projects: [
                {
                    name: "Online Payment & Valuation services",
                    description: "Industry-Leading Car Dealer Websites",
                    participate_in: "Participate in develop new feature, maintain Online Payment & Valuation services as Full-Stack PHP & Angular Developer",
                    link: "https://www.dealerwebsite.co.uk/"
                },
                {
                    name: "https://www.baolau.com",
                    description: "Information and ticket booking service for travelling around Asia. Find schedules and fares, book flights, trains, buses and ferries.",
                    participate_in: "Participate in develop new feature, maintain the website",
                    link: "https://www.baolau.com/en/"
                },
                {
                    name: "https://www.livesv.com/",
                    description: "CMS website to build other websites",
                    participate_in: "Participate in develop new features, maintain as main developer of that oursource project",
                    link: "https://www.livesv.com/"
                }
            ]
        }
    },
    created() {
        this.testing();
    },
    methods: {
        testing: function () {
            console.log(this.test);
        }
    }
});
