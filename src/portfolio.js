import DisarmItImg from './assets/DisarmIt.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'SBK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'S. Bharath Krishnan',
  role: 'Game Developer & Graphics Programmer',
  description:(
    <>
      I am a passionate Computer Science engineer with over 7 years of experience specializing in <strong>game development</strong> and <strong>graphics programming</strong>. Skilled in <strong>Unity (C#)</strong>, <strong>shader programming</strong>, <strong>procedural generation</strong>, and <strong>2D/3D game engine development</strong>, I have built and optimized interactive, visually compelling games and engine components. My expertise includes <strong>real-time rendering</strong>, <strong>lighting models</strong>, <strong>particle systems</strong>, and <strong>performance optimization</strong> using both high-level scripting and low-level graphics techniques in <strong>GLSL</strong> and <strong>modern C++</strong>. I have led game development communities, organized <strong>game jams</strong>, and mentored peers, continuously pushing creative and technical boundaries to deliver polished, scalable, and immersive gaming experiences.
    </>
  ),
  resume: 'https://www.overleaf.com/read/tsrmmbmpgmsf#f058a6',
  social: {
    linkedin: 'https://www.linkedin.com/in/bharath-krishnan-119915211/',
    github: 'https://github.com/Bharath33-Krishnan',
    itch: 'https://bharathk33.itch.io/'
  },
}


const games = [
  {
    name: 'Funky Blueprints (2024)',
    content: (
      <div className='iframe-container'>
        <iframe
          max-height='1200px'
          height='100%'
          src='https://www.youtube.com/embed/QuP8OgCKnaM?si=ygK62cTdX9dZ3N9F'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Funky Blueprints</strong> is a physics-based puzzle game
            developed in one week during a game jam hosted by{' '}
            <strong>IIT Palakkad</strong>, where it won{' '}
            <strong>2nd place</strong>. Based on the theme{' '}
            <strong>&quot;Metamorphosis&quot;</strong>, the game challenges
            players to draw structures with distinct physical behaviors—static,
            rotating (at various speeds), and joint-connected—to guide a heart
            to its destination through creative contraptions. Despite being my
            first time using the <strong>Godot Engine</strong>, my prior
            experience with Unity allowed me to quickly adapt and contribute
            effectively within a four-person team.
          </p>
          <p>
            <strong>Key Contributions:</strong>
          </p>
          <ul className='portfolio-list'>
            <li>
              <strong>Stroke Collision System</strong>: Implemented an algorithm
              to analyze drawn strokes (represented as vectors of points) and
              generate capsule colliders based on curvature—using a single
              collider for smooth segments and multiple for sharper bends.
            </li>
            <li>
              <strong>Joint Management System</strong>: Designed and implemented
              data structures to dynamically create and safely delete joints
              between drawn structures without compromising game stability.
            </li>
          </ul>
        </div>
      </>
    ),
    stack: ['Godot', 'GDScript'],
    livePreview: 'https://bharathk33.itch.io/funkyblueprints',
  },
  {
    name: 'Disarm It (2020)',
    content: (
      <div className='iframe-container'>
        <img
          alt="Disarm It"
          max-height='1200px'
          height='100%'
          src={DisarmItImg}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
      </div>
    ),
    description: (
      <>
        <div className='portfolio-entry' style={{ textAlign: 'left' }}>
          <p>
            <strong>Disarm It</strong> is a high-pressure time-attack game
            created for the GMTK Game Jam 2020. Developed in{' '}
            <strong>Unity</strong>, it marked my first foray into game jams and
            procedural generation. The core gameplay revolves around driving a
            car that must obey dynamically generated rules—such as &quot;always drive
            backward&quot—to prevent an onboard bomb from detonating. Obstacles are
            generated randomly and increase in frequency as the timer ticks
            down, adding to the chaotic tension.
          </p>

          <p>
            As a solo project, <em>Disarm It</em> helped me explore fundamental
            procedural generation, car physics, and rule systems. The game
            featured hand-drawn UI elements made in MS Paint, quirky
            physics-based controls, and a randomized rule engine that enforced
            unique driving constraints per run. It ranked{' '}
            <strong>1563 / 5267</strong> entries in the jam and stands as an
            unforgettable milestone in my game development journey.
          </p>
        </div>
      </>
    ),
    stack: ['Unity', 'C#'],
    livePreview: 'https://bharathk33.itch.io/disarmit',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    content:(
      <></>
    ),
    description:(
      <>
      <strong>Amet</strong> asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam
      </>
    ),
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bharathkrishnan33@gmail.com',
}

export { header, about, games,projects, skills, contact }
