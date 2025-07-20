import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  // Professional journey steps
  getProfessionalJourney() {
    return [
      {
        title: 'PHP Developer',
        description: 'Started my career as a PHP developer, building web applications and learning the fundamentals of web development.',
        icon: 'code'
      },
      {
        title: 'HTML, CSS, JS',
        description: 'Expanded my skills to frontend technologies, mastering HTML, CSS, and JavaScript to create responsive and interactive web interfaces.',
        icon: 'web'
      },
      {
        title: 'Angular Developer',
        description: 'Transitioned to Angular development, embracing TypeScript and component-based architecture for building modern web applications.',
        icon: 'integration_instructions'
      },
      {
        title: 'Multiple Angular Projects',
        description: 'Successfully built and deployed several Angular projects, enhancing my expertise in the framework and related technologies.',
        icon: 'apps'
      },
      {
        title: 'Evolving Skill Set',
        description: 'Currently expanding my knowledge in advanced Angular concepts, state management, and preparing for new career opportunities.',
        icon: 'trending_up'
      }
    ];
  }

  // Technical skills
  getTechSkills() {
    return [
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'RxJS', icon: 'code' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Angular Material', icon: 'material' },
      { name: 'Git', icon: 'git' },
      { name: 'PHP', icon: 'php' }
    ];
  }

  // Projects
  getProjects() {
    return [
      {
        name: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform built with Angular and integrated with RESTful APIs.',
        image: 'assets/images/projects/ecommerce.jpg'
      },
      {
        name: 'Task Management App',
        description: 'A productivity application for managing tasks and projects with real-time updates.',
        image: 'assets/images/projects/task-app.jpg'
      },
      {
        name: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing professional achievements and projects.',
        image: 'assets/images/projects/portfolio.jpg'
      },
      {
        name: 'Dashboard Analytics',
        description: 'An interactive dashboard for visualizing and analyzing business metrics and KPIs.',
        image: 'assets/images/projects/dashboard.jpg'
      }
    ];
  }

  // Life journey milestones
  getLifeJourney() {
    return [
      {
        title: 'Birth',
        description: 'Born and raised in a loving family environment.',
        icon: 'child_care',
        year: '1990s'
      },
      {
        title: 'School Years',
        description: 'Completed primary and secondary education with a growing interest in technology.',
        icon: 'school',
        year: '2000s'
      },
      {
        title: 'B.Sc. Degree',
        description: 'Graduated with a Bachelor of Science degree, laying the foundation for my technical career.',
        icon: 'science',
        year: '2010s'
      },
      {
        title: 'M.C.A. Degree',
        description: 'Earned a Master of Computer Applications degree, specializing in software development.',
        icon: 'computer',
        year: '2010s'
      },
      {
        title: 'First Job',
        description: 'Started my professional journey in the tech industry, working on web development projects.',
        icon: 'work',
        year: '2010s'
      },
      {
        title: 'Marriage',
        description: 'Found my life partner and started a beautiful journey together.',
        icon: 'favorite',
        year: '2010s'
      },
      {
        title: 'Fatherhood',
        description: 'Blessed with a child, embracing the joys and responsibilities of parenthood.',
        icon: 'family_restroom',
        year: '2020s'
      }
    ];
  }

  // Life pillars
  getLifePillars() {
    return [
      {
        title: 'Family',
        description: 'My parents are my foundation, providing unwavering support and guidance throughout my life.',
        icon: 'family_restroom'
      },
      {
        title: 'Wife',
        description: 'My partner in life, bringing love, balance, and companionship to my journey.',
        icon: 'favorite'
      },
      {
        title: 'Music',
        description: 'A passion that brings joy, inspiration, and emotional expression to my life.',
        icon: 'music_note'
      },
      {
        title: 'Work/Identity',
        description: 'My professional journey and personal growth that shapes who I am and aspire to be.',
        icon: 'person'
      }
    ];
  }

  // Music categories
  getMusicCategories() {
    return {
      indian: {
        title: 'Indian Music',
        genres: [
          {
            name: 'Bollywood',
            artists: ['Arijit Singh', 'A.R. Rahman', 'Shreya Ghoshal'],
            image: 'assets/images/music/bollywood.jpg'
          },
          {
            name: 'Classical',
            artists: ['Pandit Ravi Shankar', 'Ustad Zakir Hussain', 'Hariprasad Chaurasia'],
            image: 'assets/images/music/indian-classical.jpg'
          }
        ]
      },
      oldClassics: {
        title: 'Old Classics',
        genres: [
          {
            name: 'Retro Bollywood',
            artists: ['Kishore Kumar', 'Mohammed Rafi', 'Lata Mangeshkar'],
            image: 'assets/images/music/retro-bollywood.jpg'
          },
          {
            name: 'Ghazals',
            artists: ['Jagjit Singh', 'Ghulam Ali', 'Pankaj Udhas'],
            image: 'assets/images/music/ghazals.jpg'
          }
        ]
      },
      english: {
        title: 'English Music',
        genres: [
          {
            name: 'Rock',
            artists: ['Linkin Park', 'Coldplay', 'AC/DC'],
            image: 'assets/images/music/rock.jpg'
          },
          {
            name: 'Rap',
            artists: ['Eminem', 'Drake', 'Kendrick Lamar'],
            image: 'assets/images/music/rap.jpg'
          },
          {
            name: 'EDM',
            artists: ['Martin Garrix', 'Avicii', 'David Guetta'],
            image: 'assets/images/music/edm.jpg'
          }
        ]
      }
    };
  }

  // Movies and series categories
  getEntertainmentCategories() {
    return {
      movies: {
        title: 'Movies',
        categories: {
          indian: {
            title: 'Indian Movies',
            subcategories: {
              hindi: {
                title: 'Hindi Movies',
                items: [
                  { title: 'Dil Chahta Hai', image: 'assets/images/movies/dil-chahta-hai.jpg' },
                  { title: 'Lagaan', image: 'assets/images/movies/lagaan.jpg' },
                  { title: '3 Idiots', image: 'assets/images/movies/3-idiots.jpg' }
                ]
              },
              southIndian: {
                title: 'South Indian Movies',
                items: [
                  { title: 'Baahubali', image: 'assets/images/movies/baahubali.jpg' },
                  { title: 'KGF', image: 'assets/images/movies/kgf.jpg' },
                  { title: 'RRR', image: 'assets/images/movies/rrr.jpg' }
                ]
              }
            }
          },
          foreign: {
            title: 'Foreign Movies',
            subcategories: {
              action: {
                title: 'Action Movies',
                items: [
                  { title: 'Die Hard', image: 'assets/images/movies/die-hard.jpg' },
                  { title: 'John Wick', image: 'assets/images/movies/john-wick.jpg' },
                  { title: 'Mission Impossible', image: 'assets/images/movies/mission-impossible.jpg' }
                ]
              },
              comicBook: {
                title: 'Comic Book Movies',
                items: [
                  { title: 'The Dark Knight', image: 'assets/images/movies/dark-knight.jpg' },
                  { title: 'Avengers: Endgame', image: 'assets/images/movies/avengers.jpg' },
                  { title: 'Spider-Man: No Way Home', image: 'assets/images/movies/spiderman.jpg' }
                ]
              },
              scienceFiction: {
                title: 'Science Fiction',
                items: [
                  { title: 'Inception', image: 'assets/images/movies/inception.jpg' },
                  { title: 'Interstellar', image: 'assets/images/movies/interstellar.jpg' },
                  { title: 'The Matrix', image: 'assets/images/movies/matrix.jpg' }
                ]
              }
            }
          }
        }
      },
      webSeries: {
        title: 'Web Series',
        categories: {
          indian: {
            title: 'Indian Web Series',
            items: [
              { title: 'Special Ops', image: 'assets/images/series/special-ops.jpg' },
              { title: 'Gyarah Gyarah', image: 'assets/images/series/gyarah-gyarah.jpg' },
              { title: 'Mirzapur', image: 'assets/images/series/mirzapur.jpg' }
            ]
          },
          foreign: {
            title: 'Foreign Web Series',
            items: [
              { title: 'Breaking Bad', image: 'assets/images/series/breaking-bad.jpg' },
              { title: 'Game of Thrones', image: 'assets/images/series/game-of-thrones.jpg' },
              { title: 'Stranger Things', image: 'assets/images/series/stranger-things.jpg' }
            ]
          }
        }
      }
    };
  }
}
