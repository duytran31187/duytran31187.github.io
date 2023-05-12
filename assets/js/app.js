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
                    time_period: "2021 - now",
                    job_details: [
                        {
                            name: "PHP, Angular Fullstack Developer"
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
